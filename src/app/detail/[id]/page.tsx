import { Gallery } from '@/app/components/Gallery'
import Image from 'next/image'

import {fetchCredits, fetchMovie, fetchSimilarMovies} from '../../utils/fetch'
import { getPosterUrl, getBackdropUrl } from '../../utils/getPhotos'


const getDuration = (time:number) => {
    let duration;
    if (time < 60) {
        duration = `${time} MIN`
    }else if (time >= 60 && time < 1440) {
        const hours = Math.floor(time/60)
        const minutes = time - hours*60
        duration = `${hours} H ${minutes} MIN`
    }
    return duration
}

interface Props {
    params: {
        id: string
    }
}

interface Person{
    known_for_department: string;
    name: string;
}

type MovieType = {
    title: string,
    backdrop_path: string,
    poster_path: string
}

export default async function DetailMovie({params}: Props) {
    const {id} = params
    const movie = fetchMovie(id)
    const credits = fetchCredits(id)
    const similarMovies = fetchSimilarMovies(id)

    const [movie2 , credits2, similarMovies2]= await Promise.all([movie, credits, similarMovies])

    const similarMoviesSliced = similarMovies2.results.filter((movie: MovieType) => movie.poster_path !== null).slice(0,12)
    const similarMoviesPoster = similarMoviesSliced.map((movie: MovieType) => getPosterUrl(movie.poster_path))

    
    const year = movie2.release_date.split('-')[0]
    const duration = getDuration(movie2.runtime) 
    const directors = credits2.crew.filter((crew:Person) => crew.known_for_department === 'Directing').slice(0,8)
    const cast = credits2.cast.filter((actor:Person) => actor.known_for_department === 'Acting').slice(0,8)
    const producers = credits2.crew.filter((crew:Person) => crew.known_for_department === 'Production').slice(0,8)
    const screenwriters = credits2.crew.filter((crew:Person) => crew.known_for_department === 'Writing').slice(0,2)
    

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white relative">
        <div className='w-[100vw] md:w-full overflow-hidden relative text-secondary h-[500px] 2xl:h-[700px]'>
            <Image src={getBackdropUrl(movie2.backdrop_path)} alt={movie2.title} className='w-full object-cover' width={1280} height={420} />
            <div className='absolute bottom-0 w-full h-96 bg-gradient-to-t from-bg-very-dark ' />
        </div>
        <div className='relative self-baseline flex flex-col gap-8 relative top-[-200px] w-full'>
            <div className='flex flex-col justify-start gap-6 pl-12'>
                <h1 className='text-4xl font-bold text-white max-w-[500px] 2xl:max-w-[700px] text-shadow-md 2xl:text-6xl'>{movie2.title}</h1>
                <div className='flex flex-row gap-4'>
                    <p>{duration}</p>
                    <p>{year}</p>     
                </div>
                <div className='flex  items-center gap-4 w-full'>
                    <button className='bg-black p-4 rounded-full outline outline-2 outline-white hover:outline-blue-500 hover:bg-btn-hover'>
                        <Image src='/play.svg' alt='Play' width={22} height={22}/>
                    </button>
                    <button className='p-3 rounded-full hover:bg-btn-hover'>
                        <Image src='/plus.svg' alt='Plus' width={22} height={22}/>
                    </button>
                </div>
            </div>        
            <div className='w-3/4 pl-12'>
                <p>{movie2.overview}</p>
            </div>
            <div className='w-full mt-8'>
                <Gallery movies={similarMoviesSliced} moviesPoster={similarMoviesPoster} title={'Similar movies'}  />
            </div>
            <div className='flex flex-row gap-24 w-3/4 pl-12'>
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold'>Cast</h1>
                        <div className='grid grid-cols-2 gap-4'>
                            {cast.map((actor: Person, id: number) => (
                                <p key={id}>{actor.name}</p>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold'>Producers</h1>
                        <div className='grid grid-cols-2 gap-4'>
                            {producers.map((producer: Person, id: number) => (
                                <p key={id}>{producer.name}</p>
                            ))}
                        </div> 
                    </div>
                </div>
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold'>Directors</h1>
                        <div className='grid grid-cols-2 gap-4'>
                            {directors.map((director: Person, id: number) => (
                                <p key={id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold'>Screenwriters</h1>
                        <div className='grid grid-cols-2 gap-4'>
                            {screenwriters.map((writer: Person, id: number) => (
                                <p key={id}>{writer.name}</p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </main>
  )
}