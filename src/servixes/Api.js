const API_KEY='e149d21acb0caaddd6b18b99125b2895'
const API_URL="https://api.themoviedb.org/3"

export const getpopularmovies=async()=>{
    const response=await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    const data=await response.json()
    return data.results;
}

export const searchMovies=async(query)=>{
    const response=await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data=await response.json()
    return data.results;
}