import React from 'react'

export default function Results({results}) {
  return (
    <div>
        {Array.isArray(results) ? (
        data.map((result) => (
          <div key={result.id}>{result.original_title}</div>
        ))
      ) : (
        <div>No results found</div>
      )}
    </div>
  )
}
