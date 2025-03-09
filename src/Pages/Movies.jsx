import React, { useEffect, useState } from 'react';
import MovieCard from "../Components/MovieCard"
import {searchMovies,getpopularmovies} from "../servixes/Api"
import "../css/Movies.css" 

function Movies(){
    // console.log("Movies component is rendering");
    const [searchquery,setsearchquery] = useState("");
    const [movies,setMovies] = useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const loadpopularmovies=async() =>{
            try{
                console.log("Fetching popular movies...");
                const popularmovies=await getpopularmovies()
                console.log("Fetched movies:", popularmovies);
                setMovies(popularmovies)
            }
            catch(e){
                console.error("Error fetching movies:", e);
                setError("Failed to fetch movies.");
            }
            finally{
                setLoading(false);
            }
        }
       loadpopularmovies()
    },[])

    const click= async(e)=>{
        e.preventDefault();
        if(!searchquery.trim()) return; 

        setLoading(true);
        try{
            console.log("Searching for movies with query:", searchquery);
            const searchResults=await searchMovies(searchquery)
            console.log("Search results:", searchResults);
            setMovies(searchResults)
            setError(null)
        }
        catch(error){
            console.error("Error searching movies:", error);
            setError("Failed to fetch search results.");
        }
        finally{
            setLoading(false)
        }

        // setsearchquery("");
    }


    return(
        <>
        <div className='home'>
            <form onSubmit={click} className='search-form'>
                <input type='text' placeholder='search for movies...' className='search-input' value={searchquery} onChange={(e)=>setsearchquery(e.target.value)} />
                <button type='submit' className='search-button'>
                    Search
                </button>

            </form>
        
       
                {loading ? (
                    <p>Loading movies...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <div className="movies-grid">
                        {movies.map((movie)=>{
                            console.log("Rendering movie:", movie);
                            return (
                                <MovieCard movie={movie} key={movie.id}/>
                            );
                        })}
                    </div>
                )}
                
        </div>
        </>
    );
}

export default Movies;



