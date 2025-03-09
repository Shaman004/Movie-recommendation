import React from 'react'
import "../css/Favourites.css"
import { useFavouriteContext } from '../contexts/FavouriteContext'
import MovieCard from '../Components/MovieCard'
const Favourites = () => {
  const { favourite } = useFavouriteContext()

  if(favourite){
    return (
    <div className='favourites'>
      <h2>Your favourties</h2>
    <div className="movies-grid">
    {favourite.map((movie)=>{
        console.log("Rendering movie:", movie);
        return (
            <MovieCard movie={movie} key={movie.id}/>
        );
    })}
</div>
</div>
    )
  }

  return (
    <div className='favourites-empty'>
       <h2> Favourites </h2>
       <p>No Favourtie movie yet....</p>
    </div>
  )
}

export default Favourites