export const Results = ({results}) => {
  return (
    <>
        {results.map((result) => (
            <div key={result.id}>{result.origin_tittle}</div>
        ))}
    </>
    
  )
}
