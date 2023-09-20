// src/components/Logout.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Simulated logout
    history.push('/login');
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
