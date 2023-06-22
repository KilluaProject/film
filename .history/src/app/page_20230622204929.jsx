import { Results } from "@/components/Results";


const API_KEY = process.env.API_KEY

async function getData(){
  const genre = searchParams && searchParams.genre ? searchParams.genre : "fecthTrending";
  
  const res = await fetch(
    `https://api.themoviedb.org/3/${genre === "fecthTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10 } }
  );

  if(!res.ok){
    throw new Error ("Failed to fecth data")
  }

    const data = await res.json();
    const results = data.results;
}
  

export default async function Home () {
 const res = await getData()
   
  return (
    <div>
    </div>
  )
}
