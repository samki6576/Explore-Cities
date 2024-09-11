// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Explore Cities is your guide to discovering cities around the world. Learn about city populations, cultures, and more.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore Cities</a></li>
    
          </ul>
        </div>
        <div className="footer-section subscribe">
          <h2>Quote</h2>
        <p>"Cities are not just places on a map, but vibrant tapestries woven with dreams, stories, and endless possibilities. Discover the heartbeat of each city, where every street has a tale and every corner invites you to explore its magic."</p>
        </div>
   
      </div>
      <div className="footer-bottom">
        <p>© 2024 Explore Cities | All Rights Reserved</p>
      </div>
      <button className="scroll-to-top" onClick={() => window.scrollTo(0, 0)}>
        ↑ Back to Top
      </button>
    </footer>
  );
}

export default Footer;
