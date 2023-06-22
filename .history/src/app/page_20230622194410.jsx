import { Results } from "@/components/Results";

const API_KEY = process.env.API_KEY

export default async function Home ({searchParam}) {
    
   
  return (
    <div>
      <Results results={results}/>
    </div>
  )
}
