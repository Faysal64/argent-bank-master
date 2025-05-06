import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
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
    <Provider store={store}>
      <BrowserRouter>
        <AppWithProfile />
      </BrowserRouter>
    </Provider>
  );
}

function AppWithProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchProfile = async () => {
      if (!token) return;

      try {
        const res = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok && data.body?.userName) {
          dispatch({ type: 'UPDATE_NAME', payload: data.body.userName });
        } else {
          if (data.message === 'jwt expired') {
            localStorage.removeItem('token');
            dispatch({ type: 'LOGOUT' });
            navigate('/sign-in');
          }
        }
      } catch (err) {
        console.error('Erreur chargement profil global :', err);
      }
    };

    fetchProfile();
  }, [token, dispatch, navigate, isLoggedIn]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/UserPage" element={<UserPage />} />
      </Routes>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
