import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import './NavBar.css';

const NavBar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          MoviesLib
        </Link>
      </h2>
      <form>
        <input type="text" placeholder="Search movie by the name" />
        <button type="submit">
          {' '}
          <BiSearchAlt2 />
        </button>

      </form>
    </nav>
  );
};

export default NavBar;
