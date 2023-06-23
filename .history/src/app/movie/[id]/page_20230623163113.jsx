import React from 'react'

async function getMovie(movieId){
    const res = await fetch (`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    const movie = await res.json();
}

export default function MoviePage(params) {
    const movieId = params;
    const movie = await getMovie(movieId)
  return (
    <div>page</div>
  )
}
