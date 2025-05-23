import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../styles/connexion.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.body?.token) {
        const token = data.body.token;
        localStorage.setItem('token', token);
        dispatch({ type: 'LOGIN', payload: token });

        
        const profileRes = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const profileData = await profileRes.json();

        if (profileRes.ok) {
          const userName = profileData.body?.userName || 'Tony Jarvis';
          dispatch({ type: 'UPDATE_NAME', payload: userName });
        }
        
        navigate('/UserPage');
      } else {
        setError(data.message || 'Identifiants invalides');
      }
    } catch (err) {
      console.error(err);
      setError('Erreur de connexion au serveur');
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Email</label>
            <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
          <button className="sign-in-button" type="submit">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
