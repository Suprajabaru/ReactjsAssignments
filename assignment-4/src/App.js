import React, { useState } from 'react';
import { BrowserRouter as Router,  Navigate,  Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './About';


 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Navigate to={isLoggedIn ? '/home' : '/login'} />
              </li>
              <li>
                <Navigate to={isLoggedIn ? '/about' : '/login'} />
              </li>
              {isLoggedIn ? (
                <li>
                  <a href="http://localhost:3004/" onClick={() => setIsLoggedIn(false)}>
                    Logout
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
        </header>

        <Routes
          path="/home"
          render={() => (isLoggedIn ? <Home /> : <Navigate to="/login" />)}
        />
        <Routes
          path="/about"
          render={() => (isLoggedIn ? <About /> : <Navigate to="/login" />)}
        />
        <Routes path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

