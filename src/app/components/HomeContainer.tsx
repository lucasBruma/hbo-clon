import Image from 'next/image'
import Link from 'next/link'
import {fetchTrendingMovies, fetchRatedMovies, fetchActionMovies, fetchFamilyMovies} from '../utils/fetch'
import { Gallery } from '../components/Gallery'


const getPosterUrl = (image:string) =>{
    return `https://image.tmdb.org/t/p/w1280${image}`
  }
  
  type MovieType = {
    title: string,
    backdrop_path: string,
    poster_path: string
  }
  

export async function HomeContainer () {
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

    <div className='w-full flex flex-col gap-8 mt-8'>
    <Gallery movies={trendingMoviesSliced} moviesPoster={trendingMoviesPoster} title={'Trending movies'} />
    <Gallery movies={ratedMoviesSliced} moviesPoster={ratedMoviesPoster} title={'Best rated movies'} />
    <Gallery movies={actionMoviesSliced} moviesPoster={actionMoviesPoster} title={'Best action movies'} />
    <Gallery movies={familyMoviesSliced} moviesPoster={familyMoviesPoster} title={'Best family movies'} />
  </div>

  )
}