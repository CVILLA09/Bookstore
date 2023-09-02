import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import FormAddBook from './components/FormAddBook';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <FormAddBook />
    </Router>
  );
}

export default App;
