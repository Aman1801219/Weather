

import React from 'react';

const WeatherCard = ({ date, temperature, icon }) => {
  return (
    <div className="col-md-2">
      <div className="weather-card">
        <p className="mb-0">{date}</p>
        <img src={icon} alt="Weather icon" className="weather-icon" />
        <p className="mt-2">{temperature}°C</p>
      </div>
    </div>
  );
};

export default WeatherCard;
