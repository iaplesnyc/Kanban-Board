// filepath: client/src/components/Navbar.tsx

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoginCheck(Auth.loggedIn());
  }, []);

  const handleLogout = () => {
    Auth.logout();
    setLoginCheck(false);
    navigate('/login');
  };

  return (
    <div className="nav">
      <div className="nav-title">
        <Link to="/">Krazy Kanban Board</Link>
      </div>
      <ul className="nav-links">
        {loginCheck && (
          <li className="nav-item">
            <Link to="/new-ticket">
              <button type="button">New Ticket</button>
            </Link>
          </li>
        )}
        {!loginCheck ? (
          <li className="nav-item">
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
          </li>
        ) : (
          <li className="nav-item">
            <button type="button" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
