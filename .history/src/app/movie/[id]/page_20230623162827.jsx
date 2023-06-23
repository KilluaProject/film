import React from 'react'

export default function MoviePage(params) {
    const movieId = params.id;
    const res = await fetch (`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    const movie = await res.json();
  return (
    <div>page</div>
  )
}
