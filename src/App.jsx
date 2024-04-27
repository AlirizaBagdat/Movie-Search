import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage/loginPage';
import SignupPage from './components/SignUp/signup';
import SearchPage from './components/Search/search';
import MovieDetails from './components/movieDetails';
import NavBar from './components/Search/navbar';
import 'normalize.css';   
// import './app.css';

function App() {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  const handleSearch = async (query) => { // Define handleSearch function
    try {
      const apiKey = '1cece4418167d7edc50a16dc5aef363a';
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      return data.results; // Return search results
    } catch (error) {
      console.error(error);
      return []; // Return empty array if there's an error
    }
  };

  return (
    <Router>
      
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/search" element={isLoggedIn ? <SearchPage /> : <Navigate to="/login" />} />
        <Route path="/" element={<LoginPage />} />
        <Route path='/movie/:id' element={<MovieDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;


