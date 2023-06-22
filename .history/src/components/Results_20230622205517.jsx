import React from 'react'

export const Results = ({data}) => {
  return (
    <div>
    {data && results.map((results) => (
    <div key={results.id}>{results.original_title}</div>
  ))}
</div>

  )
}
