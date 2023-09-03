import { NavLink } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import '../styles/navigation.css';

function Navigation() {
  return (
    <header>
      <h1 className="title">Bookstore</h1>
      <nav className="list-container">
        <ul className="list">
          <li className="list-item">
            <NavLink className="list-text" exact to="/">Books</NavLink>
          </li>
          <li className="list-item">
            <NavLink className="list-text" to="/categories">Categories</NavLink>
          </li>
        </ul>
      </nav>
      <span className="user-icon">
        <IconContext.Provider value={{ className: 'react-icons' }}>
          <BsPersonCircle />
        </IconContext.Provider>
      </span>
    </header>
  );
}

export default Navigation;
