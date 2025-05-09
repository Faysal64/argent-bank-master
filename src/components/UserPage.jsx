import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditNameForm from './EditNameForm';
import Account from './Account';
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

      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />

      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />

      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}

export default UserPage;
