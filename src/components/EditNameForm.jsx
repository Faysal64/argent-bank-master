import '../EditNameForm.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function EditNameForm({ onCancel }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  const [username, setUsername] = useState(currentUser.name || '');
  const [firstName, setFirstName] = useState('Tony'); 
  const [lastName, setLastName] = useState('Stark');   

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_NAME', payload: username });
    localStorage.setItem('username', username); // <-- on sauvegarde dans localStorage
    onCancel();
  };
  

  return (
    <form onSubmit={handleSubmit} className="edit-name-form">
      <h2>Edit user info</h2>

      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>

      <div className="input-wrapper">
  <label htmlFor="firstname">First name</label>
  <input
    type="text"
    id="firstname"
    value={firstName}
    disabled // <-- on ajoute ça
  />
</div>

<div className="input-wrapper">
  <label htmlFor="lastname">Last name</label>
  <input
    type="text"
    id="lastname"
    value={lastName}
    disabled // <-- on ajoute ça
  />
</div>


      <div className="edit-buttons">
        <button type="submit" className="edit-button save">Save</button>
        <button type="button" className="edit-button cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}
