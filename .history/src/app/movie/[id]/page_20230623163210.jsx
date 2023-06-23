import React from 'react'

async function getMovie(movieId){
    const res = await fetch (`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);

    return await res.json();
}

export default function MoviePage(params) {
    const movieId = params;
    const movie = await getMovie(movieId)
  return (
    <div>
        <h1>{movie.title}</h1>
    </div>
  )
}
