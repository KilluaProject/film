import { Results } from "@/components/Results";

const API_KEY = process.env.API_KEY



export default  function Home ({searchParams}) {
  const genre = searchParams && searchParams.genre ? searchParams.genre : "fecthTrending";
 
   
  return (
    <div>
     
    </div>
  )
}
