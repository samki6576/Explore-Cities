import React, { useState } from 'react';
import './SignInModal.css';

function SignInModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save email and password in LocalStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password); // Note: Storing passwords is insecure!

    console.log('Email:', email);
    console.log('Password:', password);
    
    // Close modal after sign in
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SignInModal;
