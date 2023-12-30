// import React, { useState } from 'react';
// import axios from 'axios';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);

  
//   const apiUrl = `https://api.weatherapi.com/v1/current.json?key=c8375359437c4558b4b91725232912&q=London&aqi=yes`;
// //console.log(apiUrl)
//   const getWeather = async () => {
//     try {
//       const response = await axios.get(apiUrl)
      

//     //   setWeatherData(response.data);
//        console.log(setWeatherData)
//       const data = await response.data
//       console.log(data)

//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Weather App</h1>
//       <input
//         type="text"
//         placeholder="Enter city"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button onClick={getWeather}>Get Weather</button>

//       {weatherData && (
//         <div>
//           <h2>{weatherData.name}, {weatherData.sys.city}</h2>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Weather: {weatherData.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;

// Weather.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Weather = ({ city }) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.weatherapi.com/v1/current.json?key=c8375359437c4558b4b91725232912&q=${city}&aqi=yes`
//         );
//         setWeatherData(response.data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [city]);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : weatherData ? (
//         <div>
//           <h2>Weather in {weatherData.location.name}</h2>
//           <p>Temperature: {weatherData.current.temp_c}°C</p>
//           <p>Condition: {weatherData.current.condition.text}</p>
//           <p>Wind: {weatherData.current.wind_kph} km/h</p>
//           <p>AQI: {weatherData.current.air_quality.pm10}</p>
//         </div>
//       ) : (
//         <p>No weather data available</p>
//       )}
//     </div>
//   );
// };

// export default Weather;

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
