import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false); // Start with false
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(''); // Default location

  const fetchWeather = async () => {
    setLoading(true); 
    setError(null); // Reset error state before fetching
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: location, // Use the location state
          units: 'metric', // For temperature in Celsius
          appid: 'adcc616cfeb1432877154ca19c8669fd', // Replace with your API key
        },
      });
      setWeather(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message); // Capture the error message
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div>
      <h4 className="text-light mb-4">Current Weather</h4>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px' }}>Get Weather</button>
      </form>
      {weather && !loading && !error && (
        <div>
          <p><i className="fa fa-temperature-high me-3"></i>{weather.main.temp}°C</p>
          <p><i className="fa fa-cloud me-3"></i>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;