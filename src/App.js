import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksList from './components/BooksList';
import BookForm from './components/BookForm';
import Navigation from './components/Navigation';
import Categories from './components/Categories';


const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <BooksList />
    <BookForm />
  </div>
);

// Removed the placeholder for CategoriesPage

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
