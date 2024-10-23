import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ResumePage from '@pages/ResumePage';
import GeneratorPage from '@pages/GeneratorPage';

function App() {
  return (
    <Router basename="/resume-generator/dist">
      <Routes>
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/generator" element={<GeneratorPage />} />
        <Route path="/" element={<Navigate to="/resume" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

