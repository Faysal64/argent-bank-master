import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditNameForm from './EditNameForm';
import '../styles/connexion.css';

function UserPage() {
  const [isEditing, setIsEditing] = useState(false);
  const username = useSelector((state) => state.user.name);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return (
      <main className="main bg-dark columnBalance">
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Vous devriez être connecté.
        </h1>
      </main>
    );
  }

  return (
    <main className="main bg-dark columnBalance">
      <div className="header">
        {isEditing ? (
          <EditNameForm onCancel={() => setIsEditing(false)} />
        ) : (
          <>
            <h1>
              Welcome back<br />
              {username}!
            </h1>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          </>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default UserPage;
