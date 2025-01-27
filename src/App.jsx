import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import MovieList from "./Components/MovieList";
import Favorites from "./Components/Favorites";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchMovies = async (query) => {
    const API_KEY = "your_omdb_api_key";
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    setMovies(response.data.Search || []);
  };

  const addFavorite = (movie) => {
    if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (movie) => {
    setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Movie Search & Favorites</h1>
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} onAddFavorite={addFavorite} />
      <Favorites favorites={favorites} onRemoveFavorite={removeFavorite} />
    </div>
  );
};

export default App;
