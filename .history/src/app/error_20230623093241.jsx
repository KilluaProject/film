"use client"

import React from 'react'
import { useEffect } from 'react'

export default function Error({error, reset}) {

    useEffect(()=> {
        console.log(error);
    }, [error]);

  return (
    <div className='text-center mt-10'>
        <h1>Something Wrong with your code</h1>
        <button className='py-2 px-1 bg-orange-300' onClick={() => reset()}> Try again</button>
    </div>
  )
}
