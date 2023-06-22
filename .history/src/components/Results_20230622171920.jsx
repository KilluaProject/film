import React from 'react'

export const Results = ({results}) => {
  return (
    <div>

        {results.map((results) => (
            <div key={results.id}>{results.original_title}</div>
        ))}
    </div>
  )
}
