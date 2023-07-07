const api_key = '2da80b5572e13cae30e5294e989a9d6c'

export const fetchTrendingMovies = () => {
    return fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&page=1`)
      .then(res => res.json())
  }
  
export  const fetchRatedMovies = () => {
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=1`)
      .then(res => res.json())
  }
  
 export const fetchActionMovies = () =>{
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28&page=1`)
      .then(res => res.json())
  }
  
 export const fetchFamilyMovies = () =>{
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10751&page=1`)
      .then(res => res.json())
  }
  

export const fetchCredits = (id: string) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
    .then(res => res.json())
}

export const fetchMovie = (id: string) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
      .then(res => res.json())
}

export const fetchSimilarMovies = (id: string) =>{
    return fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}`)
    .then(res => res.json())
}

export const fetchMovies = () => {
    return fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&page=1`)
      .then(res => res.json())
  }