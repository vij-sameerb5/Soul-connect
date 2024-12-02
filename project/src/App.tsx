import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Communities from './pages/Communities';
import Events from './pages/Events';
import Messaging from './pages/Messaging';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-purple-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;