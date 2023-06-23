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
    <div className=' max-w-6xl'>

        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center mx-auto md:space-x-6">
        
        <Image style={
            {
                maxWidth: "100%",
                height: "auto",
            }
        } placeholder='blur' blurDataURL='/spinner.svg'  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path||movie.poster_path}`}width={500} height={300} all="poster-movie" className='rounded-md group-hover:opacity-80 transition-opacity duration-200'></Image>


        </div>
    </div>
  )
}
