import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./componenets/NavBar";

import "./App.css";
import Hero from "./componenets/Hero";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
