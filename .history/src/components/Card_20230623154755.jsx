import { Titillium_Web } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'

export default function Card({result}) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>

    <Link href={`/movie/${result.id}`}>

        <Image placeholder='blur' blurDataURL='/spinner.svg'  src={`https://image.tmdb.org/t/p/original/${result.backdrop_path||result.poster_path}`}width={500} height={300} all="poster-movie" className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'/>
        <div className="py-2 space-y-2">
            <p className=' font-light text-xs line-clamp-2'>{result.overview}
            </p>
            <h2>
                {result.title || result.name}
            </h2>

            <div className='flex'>
            <p>{result.release_date || result.first_air_date}</p>
            <FiThumbsUp/>
            {result.vote_count}

            </div>
        </div>
    </Link>

    </div>
  )
}
