
export default async function SearchPage(){
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}`)
    return (
    <div>SearchPage</div>
  )
}
