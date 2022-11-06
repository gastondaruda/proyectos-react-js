import React, {useState} from "react";
import Search from "./search";
import Forecast from "./forecast/Forecast"
import CurrentWeather from "./current-weather/Current-weather";
import {weather_api_url, weather_api_key } from "./api.js"
import "./weather.css"

function WeatherApi(){

    const [currentWeather, setCurrentWeather] = useState(null)
    const [forecast, setForecast] = useState(null)

    const handleOnSearchChange = (searchData) => {
        const [lat, lon ] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${weather_api_url}/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`);
        const forecastFetch = fetch(`${weather_api_url}/forecast?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`);

        Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {
            const weatherResponse = await response[0].json();
            const forecastResponse = await response[1].json();

            setCurrentWeather({city: searchData.label, ...weatherResponse});
            setForecast({city: searchData.label, ...forecastResponse});
        })
        .catch((err) => console.log(err))
    }

    console.log(currentWeather)
    console.log(forecast)

    return(
        <main className="weather-container">
            <h3>WeatherApi</h3>
            <Search 
                onSearchChange={handleOnSearchChange}
            />
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecast && <Forecast data={forecast}/>}
        </main>
    )
}
export default WeatherApi