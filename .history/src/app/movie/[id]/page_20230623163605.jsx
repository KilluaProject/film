import React from 'react'

async function getMovie(movieId){
    const res = await fetch (`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);

    return await res.json();
}

export default async function MoviePage({params}) {
    const movieId = params.id;
    const movie = await getMovie(movieId)
  return (
    <div className='w-full'>
        <div className="p-4 md:pt-8 flex flex-col md:flex-row">


        </div>
        <h1>{movie.title || movie.name}</h1>
    </div>
  )
}
