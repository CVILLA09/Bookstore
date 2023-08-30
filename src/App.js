import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Navigation from './components/Navigation';
import Categories from './components/Categories';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <BookList />
    <BookForm />
  </div>
);

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        {' '}
      </Routes>
    </Router>
  );
}

export default App;
