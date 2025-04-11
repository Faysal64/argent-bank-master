// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import SignIn from './components/SignIn';
import './HomePage.css';
import './connexion.css';



function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
