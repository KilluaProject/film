import React from 'react'

export const Results = ({data}) => {
  return (
    <div>
    {data && data.map((data) => (
    <div key={data.id}>{data.original_title}</div>
  ))}
</div>

  )
}
