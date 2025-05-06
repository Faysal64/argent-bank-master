import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
    <StrictMode>
      <Provider store={store}>
        <AppWithProfile />
      </Provider>
    </StrictMode>
  );
}

function AppWithProfile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
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
        }
      } catch (err) {
        console.error('Erreur chargement profil global :', err);
      }
    };

    fetchProfile();
  }, [token, dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/UserPage" element={<UserPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
