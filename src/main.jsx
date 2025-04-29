import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';      
import store from './store';                
import MainContent from './components/MainContent';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import UserPage from './components/UserPage'; 
import './styles/connexion.css'; 
import './styles/HomePage.css';  





function App() {
  return (
    <StrictMode>
       <Provider store={store}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/UserPage" element={<UserPage />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
