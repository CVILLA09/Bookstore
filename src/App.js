import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksList from './components/BooksList';
import BookForm from './components/BookForm';
import Navigation from './components/Navigation';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <BooksList />
      <BookForm />
    </div>
  );
};

const CategoriesPage = () => {
  return <h1>Categories Page</h1>;
};

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
