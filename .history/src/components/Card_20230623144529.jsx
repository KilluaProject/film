import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({result}) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>

    <Link href={`/movie/${result.id}`}>

        <Image src={`https://image.tmdb.org/t/p/orignal/${result.backdrop_path||result.poster_path}`}/>


    </Link>

    </div>
  )
}
