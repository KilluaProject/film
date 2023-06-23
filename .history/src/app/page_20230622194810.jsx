import { Results } from "@/components/Results";

const API_KEY = process.env.API_KEY

async function getGenre(){
  const genre = await fetch(
    `https://api.themoviedb.org/3/${genre === "fecthTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10 } }
  );

  const data = await Response.json()
  return data
}

export default async function Home () {
    const data = await getGenre()
   
  return (
    <div>
     
    </div>
  )
}