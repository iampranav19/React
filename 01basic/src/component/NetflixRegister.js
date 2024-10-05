import React from 'react';
import './NetflixRegister.css'; // Import the CSS file

function NetflixRegister() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p className="register-instruction">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className="register-form">
          <input
            type="email"
            placeholder="Email address"
            className="email-input"
          />
          <button type="submit" className="register-button">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

export default NetflixRegister;
