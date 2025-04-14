// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import SignIn from './components/SignIn';
import UserPage from './components/UserPage'; // 👈 tu ne l’as pas encore importé
import './connexion.css'; 
import './HomePage.css';  





function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/UserPage" element={<UserPage />} /> {/* Ajouté ici */}
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
