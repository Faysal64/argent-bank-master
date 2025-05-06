import '../styles/EditNameForm.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function EditNameForm({ onCancel }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);

  const [username, setUsername] = useState(currentUser.name || '');
  const [firstName, setFirstName] = useState('Tony');
  const [lastName, setLastName] = useState('Stark');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName: username }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch({ type: 'UPDATE_NAME', payload: username });
        onCancel();
      } else {
        console.error('Erreur lors de la mise à jour du nom :', data.message);
      }
    } catch (err) {
      console.error('Erreur API :', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-name-form">
      <h2>Edit user info</h2>

      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className="input-wrapper">
        <label htmlFor="firstname">First name</label>
        <input type="text" id="firstname" value={firstName} disabled />
      </div>

      <div className="input-wrapper">
        <label htmlFor="lastname">Last name</label>
        <input type="text" id="lastname" value={lastName} disabled />
      </div>

      <div className="edit-buttons">
        <button type="submit" className="edit-button save">Save</button>
        <button type="button" className="edit-button cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default EditNameForm;