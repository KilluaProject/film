export const Results = ({results}) => {
  return (
    <div>
        {results.map((result) => (
            <div key={result.id}>{result.origin_tittle}</div>
        ))}
    </div>
    
  )
}
