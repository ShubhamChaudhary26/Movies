import React from "react";

const MovieList = ({ movies, onAddFavorite }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="border p-4 rounded shadow">
          <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover mb-2" />
          <h2 className="font-bold">{movie.Title}</h2>
          <p>{movie.Year}</p>
          <button
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => onAddFavorite(movie)}
          >
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
