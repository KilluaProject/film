import React from 'react'
import { useEffect } from 'react/cjs/react.production.min'

export default function Error({error, reset}) {

    useEffect(()=> {
        console.log(error);
    }, [error]);

  return (
    <div>
        <h1>Something Wrong with your code</h1>
    </div>
  )
}
