
export default async function SearchPage(){
    const res = await fetch(`https://api.themoviedb.org/3/search/movie`)
    return (
    <div>SearchPage</div>
  )
}
