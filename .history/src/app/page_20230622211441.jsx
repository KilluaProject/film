import { Results } from "@/components/Results";


const API_KEY = process.env.API_KEY

async function getData(searchParams){
  const genre = searchParams && searchParams.genre ? searchParams.genre : "fetchTrending";
  
  const res = await fetch(
    `https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10 } }
  );

  if(!res.ok){
    throw new Error ("Failed to fetch data")
  }

    const data = await res.json()
    
}
  

export default async function Home () {
 const result = await getData()
   
  return (
    <div>
      <Results results={result}/>
    </div>
)}
