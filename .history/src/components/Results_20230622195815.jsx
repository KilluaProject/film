import React from 'react'

export const Results = ({res}) => {
  return (
    <div>
    {res && res.map((res) => (
    <div key={res.id}>{res.original_title}</div>
  ))}
</div>

  )
}
