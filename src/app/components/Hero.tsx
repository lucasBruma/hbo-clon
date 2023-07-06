import React from 'react'
import { Carousel } from './Carousel'

const fetchMovies = () => {
  return fetch('https://api.themoviedb.org/3/trending/all/week?api_key=2da80b5572e13cae30e5294e989a9d6c&page=1')
    .then(res => res.json())
}

// const fetch
const getBackdropUrl = (image:string) =>{
  return `https://image.tmdb.org/t/p/w1280${image}`
}

type MovieType = {
  title: string,
  backdrop_path: string,
}


export async function Hero () {
  const movies = await fetchMovies()
  const moviesHero = movies.results.slice(0,4)
  const moviesHeroWithBackdrop = moviesHero.map((movie: MovieType) => getBackdropUrl(movie.backdrop_path))

  return (
    <>
      <Carousel movies={moviesHero} moviesBackdrop={moviesHeroWithBackdrop} />
    </>
  )
}
