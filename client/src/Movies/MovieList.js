import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard.js";
import axios from 'axios';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div onClick={ () => routeToMovie(props, movie)}>
          <MovieCard 
          key={movie.id} 
          movie={movie} 
          />
        </div>
      ))}>
    </div>
  );
}

function routeToMovie(props, movie) {
  props.history.push(`/movies/${movie.id}`);
}

export default MovieList;
