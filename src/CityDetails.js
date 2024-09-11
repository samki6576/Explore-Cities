import React from 'react';
import { useParams } from 'react-router-dom';
import './CityDetails.css';
<link rel="icon" href="EXPLORE.png" /> 
function CityDetails({ cities }) {
  const { name } = useParams();
  const city = cities.find((city) => city.name === name);

  if (!city) {
    return <div className="not-found">City not found</div>;
  }

  return (
    <div className="city-details-container">
      <div className="city-header">
        <h2 className="city-title">{city.name}</h2>
        <p className="city-country">{city.country}</p>
      </div>
      <div className="city-image-container">
        <img src={city.image} alt={city.name} className="city-details-image" />
      </div>
      <div className="city-info">
        <p className="city-info-item">
          <strong>Population:</strong> {city.population.toLocaleString()}
        </p>
        <p className="city-info-item">
          <strong>Country:</strong> {city.country}
        </p>
        <p className="city-description">
          <strong>Overview:</strong> {city.Detail}
        </p>
      </div>
     
    </div>
  );
}

export default CityDetails;
