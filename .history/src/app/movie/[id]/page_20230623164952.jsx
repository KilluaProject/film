import Image from 'next/image';
import React from 'react'

async function getMovie(movieId){
    const res = await fetch (`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);

    return await res.json();
}

export default async function MoviePage({params}) {
    const movieId = params.id;
    const movie = await getMovie(movieId)
  return (
    <div className='flex items-center justify-center h-full'>

        <div className="md:pt-8 flex flex-col md:flex-row items-center content-center mx-auto max-w-6xl md:space-x-6">
        
        <Image style={
            {
                maxWidth: "100%",
                height: "auto",
            }
        } placeholder='blur' blurDataURL='/spinner.svg'  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path||movie.poster_path}`}width={500} height={500} all="poster-movie" className='rounded-md group-hover:opacity-80 transition-opacity duration-200'></Image>

        <div className='flex flex-col gap-3'>
            <h2 className='text-2xl'>{movie.title || movie.name}</h2>
            <p className='text-sm font-light'>{movie.overview}</p>
        </div>


        </div>
    </div>
  )
}
