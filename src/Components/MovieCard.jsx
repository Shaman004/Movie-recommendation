import React from 'react';
import { useFavouriteContext } from '../contexts/FavouriteContext';
import "../css/MovieCard.css"

function MovieCard({ movie }) {
    const { isFavourite, addToFavorites, removeFromFavourite } = useFavouriteContext();
    const favourite = isFavourite(movie.id);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favourite) {
            removeFromFavourite(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    if (!movie || !movie.poster_path) {
        console.error("Invalid movie data:", movie);
        return null;
    }

    return (
        <div>
            <div className="movie-card">
                <div className="movie-poster">
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title || 'Movie poster'} 
                    />
                    <div className="movie-overlay">
                        <button 
                            className={`favorite-btn ${favourite ? "active" : ""}`} 
                            onClick={onFavoriteClick}
                        >
                            ♥
                        </button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date?.split("-")[0]}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;