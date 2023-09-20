import React from 'react';
import { Link } from 'react-router-dom';

function Header({ loggedIn, onLogout }) {
  return (
    <header>
      <nav>
        <ul>
          {loggedIn ? (
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <button onClick={onLogout}>Logout</button>
              </li>
            </>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
