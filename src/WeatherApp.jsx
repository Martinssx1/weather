import React from "react";
import { useEffect, useState } from "react";

function WeatherApp() {
  const [sdata, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=9.0579&longitude=7.4951&timezone=auto&current=relative_humidity_2m,precipitation,wind_speed_10m,weather_code,temperature_2m&hourly=weather_code,temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&precipitation_unit=inch#hourly_weather_variables"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }
  return <div className="text-white text-3xl">{sdata?.current?.time}</div>;
}

export default WeatherApp;
