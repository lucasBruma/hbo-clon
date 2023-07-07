import React from 'react'
import { Carousel } from './Carousel'
import { fetchMovies } from '../utils/fetch'

import { getBackdropUrl } from '../utils/getPhotos'

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
