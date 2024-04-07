import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MobileHeader from './components/Header/MobileHeader';
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound'; 

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <MobileHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<NotFound />} /> {/* Render NotFound component for unmatched routes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
