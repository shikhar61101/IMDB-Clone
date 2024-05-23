import React from 'react';
import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing necessary components from react-router-dom
import './index.css';
//import App from './App';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import Movie from './components/pages/movieDetail/Movie';
import { MovieList } from './components/movieList/MovieList';


const CustomRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/*" element={<h1>Error</h1>} />
    <Route path="/movie/:id" element={<Movie />} />
    <Route path="/movies/:type" element={<MovieList />} />
  </Routes>
);

// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);

ReactDOM.render(
    <Router>
      <Header />
      <CustomRoutes /> {/* Render your custom routes */}
    </Router>,
    document.getElementById('root')
  );
