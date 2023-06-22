
const API_KEY = process.env.API_KEY

export default async function Home({searcParams}) {

  const genre = searcParams.genre || "fetchTrending";
  const res =  async fetch(`https://api.themoviedb.org/3/
  ${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&langueage=en-US&page=1
  `)

  return (
    <div>

    </div>
  )
}
