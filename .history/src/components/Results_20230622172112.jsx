import React from 'react'

export const Results = ({results}) => {
  return (
    <div>
  {results && results.map((result) => (
    <div key={result.id}>{result.original_title}</div>
  ))}
</div>

  )
}
