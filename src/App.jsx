import Body from "./Body";
import Content from "./content";
import Whether from "./whether";

import { useState, useEffect } from "react";

function App() {
  const [sdata, setSdata] = useState(null);
  const [location, setLocation] = useState("");
  const [searchCity, setSearchCity] = useState("");
  function HandleSearch() {
    const city = searchCity;

    fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.results && data.results.length > 0) {
          const result = data.results[0];
          const lat = result.latitude;
          const lon = result.longitude;
          console.log("lat", lat);
          console.log("lon", lon);
          fetchDataLocation(lat, lon);
          setLocation(data);
        } else {
          console.warn("No results found for city:", city);
        }
      })
      .catch((err) => console.log(err));
  }
  function handleonkeydown(e) {
    if (e.key === "Enter") {
      HandleSearch();
    }
  }

  function fetchDataLocation(lat, lon) {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=auto&current=relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code,temperature_2m&hourly=weather_code,temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&precipitation_unit=inch`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("main data2", data);
        setSdata(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchOpiData();
  }, []);
  function fetchOpiData() {
    fetch(
      "https://geocoding-api.open-meteo.com/v1/search?name=Abuja&count=10&language=en&format=json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("opi data", data);
        setLocation(data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=9.0579&longitude=7.4951&timezone=auto&current=relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code,temperature_2m&hourly=weather_code,temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&precipitation_unit=inch"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("main data", data);
        setSdata(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Whether data={sdata} opidata={location} />
      <Content
        data={sdata}
        opidata={location}
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        HandleSearch={HandleSearch}
        handleonkeydown={handleonkeydown}
      />
      <Body data={sdata} opidata={location} />
    </>
  );
}

export default App;
