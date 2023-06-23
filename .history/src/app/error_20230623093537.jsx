"use client"

import React from 'react'
import { useEffect } from 'react'

export default function Error({error, reset}) {

    useEffect(()=> {
        console.log(error);
    }, [error]);

  return (
    <div className='text-center mt-5 space-y-2'>
        <h1>Something Wrong with your code</h1>
        <button className='py-1 px-3 hover:text-slate-300 rounded-md bg-orange-300' onClick={() => reset()}> Try again</button>
    </div>
  )
}
