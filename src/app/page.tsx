import Image from 'next/image'
import {Hero} from './components/Hero'
import { Gallery } from './components/Gallery'

const fetchTrendingMovies = () => {
  return fetch('https://api.themoviedb.org/3/trending/all/week?api_key=2da80b5572e13cae30e5294e989a9d6c&page=1')
    .then(res => res.json())
}

const fetchRatedMovies = () => {
  return fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=2da80b5572e13cae30e5294e989a9d6c&page=1')
    .then(res => res.json())
}

const fetchActionMovies = () =>{
  return fetch('https://api.themoviedb.org/3/discover/movie?api_key=2da80b5572e13cae30e5294e989a9d6c&with_genres=28&page=1')
    .then(res => res.json())
}

const fetchFamilyMovies = () =>{
  return fetch('https://api.themoviedb.org/3/discover/movie?api_key=2da80b5572e13cae30e5294e989a9d6c&with_genres=10751&page=1')
    .then(res => res.json())
}

const getPosterUrl = (image:string) =>{
  return `https://image.tmdb.org/t/p/w1280${image}`
}

type MovieType = {
  title: string,
  backdrop_path: string,
  poster_path: string
}



export default async function Home() {
  const trendingMovies = fetchTrendingMovies()
  const ratedMovies = fetchRatedMovies()
  const actionMovies = fetchActionMovies()
  const familyMovies = fetchFamilyMovies()

  const [trendingMovies2, ratedMovies2, actionMovies2, familyMovies2] = await Promise.all([trendingMovies, ratedMovies, actionMovies, familyMovies])
  
  const trendingMoviesSliced = trendingMovies2.results.slice(0,12)
  const trendingMoviesPoster = trendingMoviesSliced.map((movie: MovieType) => getPosterUrl(movie.poster_path))

  const ratedMoviesSliced = ratedMovies2.results.slice(0,12)
  const ratedMoviesPoster = ratedMoviesSliced.map((movie: MovieType) => getPosterUrl(movie.poster_path)) 

  const actionMoviesSliced = actionMovies2.results.slice(0,12)
  const actionMoviesPoster = actionMoviesSliced.map((movie: MovieType) => getPosterUrl(movie.poster_path)) 

  const familyMoviesSliced = familyMovies2.results.slice(0,12)
  const familyMoviesPoster = familyMoviesSliced.map((movie: MovieType) => getPosterUrl(movie.poster_path))

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <Hero />
      <div className='w-full flex flex-col gap-8 mt-8'>
        <Gallery movies={trendingMoviesSliced} moviesPoster={trendingMoviesPoster} title={'Trending movies'} />
        <Gallery movies={ratedMoviesSliced} moviesPoster={ratedMoviesPoster} title={'Best rated movies'} />
        <Gallery movies={actionMoviesSliced} moviesPoster={actionMoviesPoster} title={'Best action movies'} />
        <Gallery movies={familyMoviesSliced} moviesPoster={familyMoviesPoster} title={'Best family movies'} />
      </div>
    </main>
  )
}
