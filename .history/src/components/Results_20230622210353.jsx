export function Results({ data }) {
    return (
      <div>
        {Array.isArray(data) ? (
          data.map((result) => (
            <div key={result.id}>{result.original_title}</div>
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
    );
  }