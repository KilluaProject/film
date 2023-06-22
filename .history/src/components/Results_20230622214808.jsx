export function Results({ data }) {
    if (!Array.isArray(data)) {
      return <div>No results found</div>;
    }
  
    return (
      <div>
        {data.map((result) => (
          <div key={result.id}>{result.original_title}</div>
        ))}
      </div>
    );
  }
  