import { Results } from "@/components/Results";

const API_KEY = process.env.API_KEY;

async function getData(genre) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${genre === "fecthTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;
  return results;
}

export default function Home({ searchParams }) {
  const genre = searchParams && searchParams.genre ? searchParams.genre : "fecthTrending";
  
  // You cannot use await directly in the function body, so use a useEffect hook
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(genre);
        // Do something with the data here
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [genre]);

  return (
    <div>
      <Results data={data} />
    </div>
  );
}
