import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  //Variable using States to appear on screen
  let [weather, weatherInformation] = useState("");
  let [city, setCity] = useState(null);

  //Response from API after user input
  function displayWeatherInformation(response) {
    return weatherInformation(
      <ul>
        <li>
          <strong>{response.data.name}</strong>
        </li>
        <li>Temperature: {Math.round(response.data.main.temp)}</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed} m/s</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather.description}
          />
        </li>
      </ul>
    );
  }

  //Gets city from user
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  //API gets info on form
  function handleCity(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8cb4b09ce92dcd0f47ea25293231322e&units=metric`;
    axios.get(apiUrl).then(displayWeatherInformation);
  }

  return (
    //Form JSX
    <div className="Search">
      <form onSubmit={handleCity}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div className="dataWeather">{weather}</div>
    </div>
  );
}
