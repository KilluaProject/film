import { Results } from "@/components/Results";

const API_KEY = process.env.API_KEY

async function getData(genre){
  const respons = await fetch (`https://api.themoviedb.org/3/${genre === "fecthTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,
  { next: { revalidate: 10 } }
);
}

export default  function Home () {
 
   
  return (
    <div>
     
    </div>
  )
}
