import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
interface WeatherData {
    // Define the structure of weather data here
}

const DisplayWeather: React.FC = () => {
    const { cityName } = useParams<{ cityName: string }>();
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const apiKey = '5bb0b14b94c1569441a3cdba53990671'; // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual OpenWeatherMap API key
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
                setWeatherData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [cityName]);

    if (loading) {
        return <div>Loading weather data for {cityName}...</div>;
    }

    if (!weatherData) {
        return <div>No weather data available for {cityName}.</div>;
    }

    // Render weather data here

    return (
        <div>
            {/* Render weather data here */}
        </div>
    );
};

export default DisplayWeather;