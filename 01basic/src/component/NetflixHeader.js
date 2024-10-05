import React from 'react';
import './NetflixHeader.css'; // Import the CSS file

function NetflixHeader() {
  return (
    <header className="netflix-header">
      <div className="header-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
        />
      </div>
      <div className="header-nav">
        <button className="sign-in-button">Sign In</button>
      </div>
    </header>
  );
}

export default NetflixHeader;
