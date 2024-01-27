import React, { useState, useEffect } from 'react';
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { GiWindsock } from "react-icons/gi";
import { TbSunMoon } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";

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
    <div className="bg-blue-300 rounded-xl">
      {error ? (
        <p>Error fetching weather data: {error}</p>
      ) : (
        weatherData && (
          <div className='p-4'>
            <div className='flex flex-col gap-4'>
              {/* <h2>{weatherData.condition}</h2> */}
              <div className='flex justify-center gap-4'>
                <div className='bg-blue-100 rounded-2xl min-w-[80px] flex flex-col items-center p-2'><FaTemperatureThreeQuarters size={30}/> {weatherData.temperature_2m}°C</div>
                <div className='bg-blue-100 rounded-2xl min-w-[80px] flex flex-col items-center p-2'><WiHumidity size={30} /> {weatherData.relative_humidity_2m}%</div>
              </div>
              <div className='flex justify-center gap-4'>
                <div className='bg-blue-100 rounded-2xl min-w-[80px] flex flex-col items-center p-2'><FaWind size={30}/> {weatherData.wind_speed_10m}km/h</div>
                <div className='bg-blue-100 rounded-2xl min-w-[80px] flex flex-col items-center p-2'><GiWindsock size={30} /> {weatherData.wind_direction_10m}°</div>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='flex items-center font-bold text-xl gap-4'><TiWeatherPartlySunny size={40} />{weatherCondition}</p>
                <p className='flex items-center font-bold text-xl gap-4'><TbSunMoon size={40} />{dayCycle}</p>
              </div>
              
            </div>
          </div>
          
        )
      )}
    </div>
  );
};

export default Weather;
