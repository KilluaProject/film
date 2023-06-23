
export default async function SearchPage({params}){
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&&language=en-US&include_adult=false`);


    if(res.ok){
        throw new Error ("Error kodingan lu blog")
    }
    return (
    <div>SearchPage</div>
  )
}
