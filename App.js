import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="header">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <h1>hello world</h1>
      </div>
    </Router>
  );
}

export default App;
