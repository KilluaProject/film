import React from 'react'
import Card from './Card'

export default function Results({results}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-col-5 max-w-6xl mx-auto px-4 py-2 flex flex-col gap-1 :'>
       {results.map((result) => (
          <Card key={result.id} result={result}/> 
       ))}
    </div>
  )
}
