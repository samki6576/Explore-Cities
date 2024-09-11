import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CityCard.css';

function CityCard({ city }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Navigate to the city details page
    navigate(`/city/${city.name}`);
  };

  return (
    <div
      className="city-card"
      style={{
        backgroundImage: `url(${city.image})`
      }}
      onClick={handleClick}
    >
      <div className="city-info">
        <h2>{city.name}</h2>
        <p>Population: {city.population.toLocaleString()}</p>
        <p>Country: {city.country}</p>
      </div>
    </div>
  );
}

export default CityCard;
