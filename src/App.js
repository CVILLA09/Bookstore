import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Navigation from './components/Navigation';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <BookForm />
    </Router>
  );
}

export default App;
