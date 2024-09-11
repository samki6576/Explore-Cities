import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import cityData from './cities.json';
import CityCard from './CityCard';
import CityDetails from './CityDetails';
import Footer from './Footer';
import './App.css';

import CommentSection from './CommentSection'; // Import the new component

function App() {
  const [cities] = useState(cityData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Explore Cities</h1>
          <input
            type="text"
            placeholder="Search city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
         
        </header>

        <main>
        <section className="quote-section">
  <h2 className="quote-heading">
    "Cities are not just places on a map, but vibrant tapestries woven with dreams, stories, and endless possibilities."
  </h2>
  <p className="quote-author">— Unknown</p>
</section>


          <Routes>
            <Route
              path="/"
              element={
                <div className="city-container">
                  {filteredCities.length > 0 ? (
                    filteredCities.map((city, index) => (
                      <CityCard key={index} city={city} />
                    ))
                  ) : (
                    <div className="not-found">City not found.It will add soon.</div>
                  )}
                </div>
              }
            />
            <Route path="/city/:name" element={<CityDetails cities={cities} />} />
          </Routes>
        </main>

        {/* Comment Section */}
        <CommentSection />

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
