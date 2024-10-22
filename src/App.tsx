import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResumePage from './pages/ResumePage';
import GeneratorPage from './pages/GeneratorPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/generator" element={<GeneratorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

