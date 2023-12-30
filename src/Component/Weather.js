import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../WeatherCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPanelVisible, setPanelVisibility] = useState(false);
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [customLocation, setCustomLocation] = useState('');
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch weather data based on the user's location or custom location
        const locationToUse = customLocation
          ? customLocation
          : location.lat && location.lon
            ? `${location.lat},${location.lon}`
            : 'London'; // Default to London if location is not available

        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=c8375359437c4558b4b91725232912&q=${locationToUse}&days=7&aqi=yes`
        );
        setWeatherData(response.data);
        console.log(response.data)
        setError(null); // Reset error if data is successfully loaded
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
        setError(error.message || 'An error occurred.');
      } finally {
        setLoading(false);
        setPanelVisibility(true);
      }
    };

    fetchData();
  }, [location, customLocation]);

  const handleLocationChange = (e) => {
    setCustomLocation(e.target.value);
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    setLocation({});
  };

  const handleRetry = () => {
    setLoading(true);
    setPanelVisibility(false);
    setWeatherData(null);
    setError(null);

  };


  return (
    <div className="App ">
      <div className="container">
        <form className="mb-3" onSubmit={handleLocationSubmit}>
          <label htmlFor="locationInput" className="form-label">
            <h4>Enter Location</h4>
          </label>
          <div className="input-group mb-3 d-flex justify-content-center ">
            <div className=''>
              <input
                type="text"
                className="form-control"
                id="locationInput"
                placeholder="E.g., New York"
                value={customLocation}
                onChange={handleLocationChange}
              /></div>
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Set Location
            </button>
          </div>
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : weatherData ? (
          <div>
            <h2 className="mb-4">
              Weather in {weatherData.location.name}
            </h2>
            <div className="current-weather card p-4 mb-4">
              <div>
                <p className='lead'><img src={weatherData.current.condition.icon} alt="" /> </p>
                <h3 className="display-4">{weatherData.current.temp_c}°C</h3>
                <p className="lead">{weatherData.current.condition.text}</p>
              </div>


            </div>
            <h3 className="mb-3">7-Day Forecast:</h3>
            <div
              className={`row forecast-container ${isPanelVisible ? 'slide-up' : ''
                }`}
            >
              {weatherData.forecast.forecastday.map((day) => { 
               return( <WeatherCard
                key={day.date}
                date={day.date}
                temperature={day.day.avgtemp_c}
                icon={day.day.condition.icon}
             /> 
)

              })}
            </div>
          </div>
        ) : error ? (
          <div className="error-container">
            <p className="error-message">{error}</p>
            <button className="btn btn-primary" onClick={handleRetry}>
              Retry
            </button>
          </div>
        ) : (


          <p>No weather data available</p>
        )}
      </div>
    </div>
  );
};


export default Weather;
