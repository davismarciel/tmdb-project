import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsCameraReels,
} from 'react-icons/bs';

import MovieCard from '../../components/MovieCard/MovieCard';

import './Movie.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieURL = `${moviesURL}/${id}}?${apiKey}`;

    getMovie(movieURL);
  }, []);

  const formatCurrency = (number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsCameraReels />
              {' '}
              Genre
            </h3>
            <p>{movie.genres[0].name}</p>
          </div>
          <div className="info">
            <h3>
              <BsWallet2 />
              {' '}
              Budget
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp />
              {' '}
              Revenue
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit />
              {' '}
              Duration
            </h3>
            <p>
              {movie.runtime}
              {' '}
              minutes
            </p>
          </div>
          <div className="info">
            <h3>
              <BsFillFileEarmarkTextFill />
              {' '}
              Description
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
