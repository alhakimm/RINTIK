import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [dayCycle, setDayCycle] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = 'https://api.open-meteo.com/v1/forecast?latitude=6.1236&longitude=102.2433&current=temperature_2m,relative_humidity_2m,is_day,rain,wind_speed_10m,wind_direction_10m&timezone=Asia%2FSingapore';

        if (!apiKey) {
          throw new Error('API key is missing or invalid');
        }

        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=6.1236&longitude=102.2433&current=temperature_2m,relative_humidity_2m,is_day,rain,wind_speed_10m,wind_direction_10m&timezone=Asia%2FSingapore`);

        if (!response.ok) {
          throw new Error(`Weather API request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log(data.current)
        setWeatherData(data.current);

        // Check if rain is 0.00 and set weather condition accordingly
        if (data.current.rain === 0.00) {
            setWeatherCondition('Sunny');
          } else {
            setWeatherCondition('Raining');
          }

          if (data.current.is_day === 0){
            setDayCycle('Night');
          } else {
            setDayCycle('Day');
          }

        } catch (error) {
          console.error('Error fetching weather data:', error);
          setError(error.message);
        }
      };

    fetchWeather();
  }, []);

  return (
    <div className="h-1/4 bg-red-200">
      {error ? (
        <p>Error fetching weather data: {error}</p>
      ) : (
        weatherData && (
          <div>
            {/* <h2>{weatherData.condition}</h2> */}
            <p>Temperature: {weatherData.temperature_2m}°C</p>
            <p>Humidity: {weatherData.relative_humidity_2m}%</p>
            <p>Wind Speed: {weatherData.wind_speed_10m}km/h</p>
            <p>Wind Direction: {weatherData.wind_direction_10m}°</p>
            <p>Weather: {weatherCondition}</p>
            <p>Time of Day: {dayCycle}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
