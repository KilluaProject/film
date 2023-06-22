
const API_KEY = process.env.API_KEY

export default async function Home({searcParams}) {

  const genre = searcParams.genre || "fecthTrending";

  const res =  await fetch (`https://api.themoviedb.org/3/${
    genre === "fecthTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`)

  return (
    <div>

    </div>
  )
}
