import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LessonsPage from './pages/LessonsPage'; // Crée ce fichier si ce n'est pas encore fait
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lessons" element={<LessonsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
