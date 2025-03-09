import "./css/App.css"
import Navbar from "./Components/Navbar.jsx";
import Favourites from "./Pages/Favourites.jsx";
import Movies from "./Pages/Movies.jsx";
import { Routes, Route } from "react-router-dom"
import { FavouriteContext } from "./contexts/FavouriteContext.jsx";

function App() {
	console.log("App component is rendering");
	
	return (
		<FavouriteContext>
			<Navbar/>
			<main className="main-content">
				<Routes>
					<Route path='/' element={<Movies/>}/>
					<Route path='/Favourites' element={<Favourites/>}/>
				</Routes>
			</main>
		</FavouriteContext>
	);
}

export default App;