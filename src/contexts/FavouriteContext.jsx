import { useContext,useState,useEffect, createContext } from "react";

const favouriteContext=createContext()


export const useFavouriteContext=()=>useContext(favouriteContext)

export const FavouriteContext=({children})=>{
    const [favourite,setFavourite]=useState([]);
    
    useEffect(()=>{
        const storedFavourite=localStorage.getItem('favourite');

        if(storedFavourite) {
            try {
                setFavourite(JSON.parse(storedFavourite))
            } catch (error) {
                console.error('Error parsing stored favourites:', error);
                setFavourite([]);
            }
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('favourite',JSON.stringify(favourite))
    },[favourite])

    const addToFavorites=(movie)=>{
        setFavourite(prev=>[...prev,movie])
    }

    const  removeFromFavourite=(movieId)=>{
        setFavourite(prev=>prev.filter(movie=>movie.id!==movieId))  
    }

    const isFavourite=(movieId)=>{
        return favourite.some(movie=>movie.id===movieId)
    }



    return (
        <favouriteContext.Provider value={{ favourite, addToFavorites, removeFromFavourite, isFavourite }}>
            {children}
        </favouriteContext.Provider>
    )
}

export default FavouriteContext;