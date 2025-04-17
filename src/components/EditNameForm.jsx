import '../EditNameForm.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function EditNameForm({ onCancel }) {
  const dispatch = useDispatch();
  const currentName = useSelector((state) => state.user.name);
  const [newName, setNewName] = useState(currentName);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_NAME', payload: newName });
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="edit-name-form">
      <h2>Edit user info</h2>
      <div className="input-wrapper">
        <label htmlFor="username">New Username</label>
        <input
          type="text"
          id="username"
          value={newName}
          onChange={({ target }) => setNewName(target.value)}
        />
      </div>
      <div className="edit-buttons">
        <button type="submit" className="edit-button save">Save</button>
        <button type="button" className="edit-button cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}
