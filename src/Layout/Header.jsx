import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        Predicts
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/predict">Predict</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/match">Matches</Link></li>
        </ul>
    </header>
  );
}

export default Header;