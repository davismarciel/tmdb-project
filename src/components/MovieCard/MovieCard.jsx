/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './MovieCard.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  const handleNull = movie.poster_path !== null;
  const defaultIMG = 'https://w7.pngwing.com/pngs/802/825/png-transparent-redbubble-polite-cat-meme-funny-cat-meme-thumbnail.png';
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card">
      {!handleNull ? (
        <img src={defaultIMG} alt={movie.title} />
      ) : (
        <img onClick={handleNavigate} className="img-poster" src={`${imageURL}${movie.poster_path}`} alt={movie.title} />
      )}
      <h2>{movie.title}</h2>
      <p>
        <FaStar />
        {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
    </div>
  );
};

export default MovieCard;
