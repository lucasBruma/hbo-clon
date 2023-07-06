import Image from 'next/image'
import Link from 'next/link'

const fetchMovie = (id: string) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2da80b5572e13cae30e5294e989a9d6c`)
      .then(res => res.json())
}
  
const getBackdropUrl = (image:string) =>{
    return `https://image.tmdb.org/t/p/w1280${image}`
}

// write a function that given the minutes returns the duration of a movie in this format '[hours] H [minutes] MIN'
// for example: if the minutes is 120, the function should return '2 H 20 MIN'
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

interface Movie {
    title: string;
    overview: string;
    backdrop_path: string;
    release_date: string;
    runtime: number;
    // Agrega aquí las propiedades adicionales que necesites
  }

export default async function DetailMovie({params}: Props) {
    const {id} = params
    const movie: Movie = await fetchMovie(id)
    console.log(movie)
    const year = movie.release_date.split('-')[0]
    const duration = getDuration(movie.runtime) 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white relative">
        <div className='w-[100vw] md:w-full overflow-hidden relative text-secondary h-[500px]'>
            <Image src={getBackdropUrl(movie.backdrop_path)} alt={movie.title} className='w-full object-cover' width={1280} height={420} />
            <div className='absolute bottom-0 w-full h-56 bg-gradient-to-t from-bg-dark ' />
        </div>
        <div className='relative pl-12 w-3/4 self-baseline flex flex-col gap-8 relative top-[-60px]'>
            <div className='flex flex-col justify-start gap-6'>
                <h1 className='text-4xl font-bold text-white max-w-[500px]'>{movie.title}</h1>
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
            <div className=''>
                <p>{movie.overview}</p>
            </div>
        </div>

    </main>
  )
}