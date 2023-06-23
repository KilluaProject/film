
export default async function SearchPage({params}){
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&&language=en-US&page=1&include_adult=false`)
    return (
    <div>SearchPage</div>
  )
}
