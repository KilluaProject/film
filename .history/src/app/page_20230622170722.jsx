const API_KEY = process.env.API_KEY

export default async function Home ({searcParams}) {

  const genre = searcParams.genre || "fecthTrending";

  

    const data = await res.json();
    const results = data.results;
    console.log(results);

  return (
    <div>

    </div>
  )
}
