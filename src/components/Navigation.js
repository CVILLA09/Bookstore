import { NavLink } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import '../styles/navigation.css';

function Navigation() {
  return (
    <header>
      <h1 className="title">Bookstore</h1>
      <nav className="list-container">
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </nav>
      <span className="user-icon">
        <BsPersonCircle />
      </span>
    </header>
  );
}

export default Navigation;
