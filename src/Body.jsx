import React from "react";
import Loading from "./loading";

function Body({ data, opidata }) {
  function flourish() {
    if (opidata?.results?.[0]) {
      return `${opidata.results[0].name},${opidata.results[0].country}`;
    } else {
      return data?.timezone;
    }
  }
  console.log(flourish());
  const currentweather = data?.current?.weather_code;
  const weathercode = data?.daily?.weather_code;
  const hourlyweather = data?.hourly?.weather_code;
  if (!Array.isArray(weathercode)) return <Loading />;
  if (!Array.isArray(hourlyweather)) return <Loading />;
  const currenttime = data?.hourly?.time;
  const currenttemp = data?.hourly?.temperature_2m;
  const currrenttempmax = data?.daily?.temperature_2m_max;
  const currrenttempmin = data?.daily?.temperature_2m_min;

  if (!Array.isArray(currenttemp)) return "No data temp";
  if (!Array.isArray(currenttime)) return "No data time";
  const final = currenttime.findIndex((currenttimes) => {
    return new Date(currenttimes).getHours() === new Date().getHours();
  });
  if (final === -1) return "No match";
  const nexthourscurrent = currenttime.slice(final, final + 9);
  const nexttempcurrent = currenttemp.slice(final, final + 9);
  const codehourweather = hourlyweather.slice(final, final + 9);
  const hours = nexthourscurrent.map((item) => {
    const hour = new Date(item).getHours();
    return hour;
  });

  const isDay = hours.map((item) => item >= 6 && item < 18);

  const ron = new Date();
  const ronny = ron.getDay();

  const weather = {
    0: isDay[1] ? (
      <img src="/images/icon-sunny.webp" alt="" />
    ) : (
      <img
        className="w-8"
        src="/images/moon-phases-moon-svgrepo-com.svg"
        alt=""
      />
    ),
    1: isDay[2] ? (
      <img src="/images/icon-sunny.webp" alt="" />
    ) : (
      <img
        className="min-w-8 max-w-9"
        src="/images/moon-svgrepo-com.svg"
        alt=""
      />
    ),
    2: isDay[3] ? (
      <img src="/images/icon-partly-cloudy.webp" alt="" />
    ) : (
      <img className="w-8" src="/images/moon-svgrepo-com.svg" alt="" />
    ),
    3: <img src="/images/icon-overcast.webp" alt="" />,
    45: <img src="/images/icon-fog.webp" alt="" />,
    48: <img src="/images/icon-fog.webp" alt="" />,
    51: <img src="/images/icon-drizzle.webp" alt="" />,
    53: <img src="/images/icon-drizzle.webp" alt="" />,
    55: <img src="/images/icon-drizzle.webp" alt="" />,
    56: <img src="/images/icon-drizzle.webp" alt="" />,
    57: <img src="/images/icon-drizzle.webp" alt="" />,
    61: <img src="/images/icon-rain.webp" alt="" />,
    63: <img src="/images/icon-rain.webp" alt="" />,
    65: <img src="/images/icon-rain.webp" alt="" />,
    66: <img src="/images/icon-rain.webp" alt="" />,
    67: <img src="/images/icon-rain.webp" alt="" />,
    71: <img src="/images/icon-snow.webp" alt="" />,
    73: <img src="/images/icon-snow.webp" alt="" />,
    75: <img src="/images/icon-snow.webp" alt="" />,
    77: <img src="/images/icon-snow.webp" alt="" />,
    80: <img src="/images/icon-rain.webp" alt="" />,
    81: <img src="/images/icon-rain.webp" alt="" />,
    82: <img src="/images/icon-rain.webp" alt="" />,
    85: <img src="/images/icon-snow.webp" alt="" />,
    86: <img src="/images/icon-snow.webp" alt="" />,
    95: <img src="/images/icon-storm.webp" alt="" />,
    96: <img src="/images/icon-storm.webp" alt="" />,
    99: <img src="/images/icon-storm.webp" alt="" />,
  };
  const weathertogo = weathercode.map((item) => {
    return weather[item];
  });
  const bgcurrent = weather[currentweather];

  const purehourly = codehourweather.map((item) => weather[item]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const todayDate = formatDate(new Date());

  function formatHour(h) {
    if (h === 0) return "12 AM";
    if (h === 12) return "12 PM";
    if (h < 12) return `${h} AM`;
    return `${h - 12} PM`;
  }
  const allnext = hours.map(formatHour);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayss = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentday = dayss[ronny];

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-7">
        <div className="flex flex-col gap-7">
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[250px]">
            <img
              src="/images/bg-today-large.svg"
              alt="Responsive"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />

            <div className="absolute top-4 left-20 md:top-20 md:left-8">
              <div className="text-white text-2xl sm:text-lg md:text-2xl font-bold mb-3">
                {flourish()}
              </div>
              <div className="text-white text-sm sm:text-lg md:text-2xl ">
                {todayDate}
              </div>
            </div>
            <div className="absolute flex items-center gap-3 top-20 right-15 md:top-20 md:right-8">
              <div className="w-30 h-25 flex items-center justify-center">
                {bgcurrent}
              </div>
              <div className="text-white text-7xl sm:text-5xl md:text-7xl font-bold">
                {Math.round(data?.current?.temperature_2m)}°
              </div>
            
            </div>
          </div>
          <div className="text-white flex flex-wrap gap-4">
            <div className="bg-[#282241] p-5 rounded-xl flex-1 min-w-[48%] sm:min-w-[200px]">
              <legend className="mb-3 text-lg">Feels Like</legend>
              <p className="text-4xl">
                {Math.round(data?.current?.apparent_temperature)}°
              </p>
            </div>
            <div className="bg-[#282241] p-5 rounded-xl flex-1 min-w-[48%] sm:min-w-[200px]">
              <legend className="mb-3 text-lg">Humidity</legend>
              <p className="text-4xl">{data?.current?.relative_humidity_2m}%</p>
            </div>
            <div className="bg-[#282241] p-5 rounded-xl flex-1 min-w-[48%] sm:min-w-[200px]">
              <legend className="mb-3 text-lg">Wind</legend>
              <p className="text-4xl">
                {Math.round(data?.current?.wind_speed_10m)} km/h
              </p>
            </div>
            <div className="bg-[#282241] p-5 rounded-xl flex-1 min-w-[48%] sm:min-w-[200px]">
              <legend className="mb-3 text-lg">Precipitation</legend>
              <p className="text-4xl">
                {Math.round(data?.current?.precipitation)} in
              </p>
            </div>
          </div>
          <div className="text-white">
            <legend className="font-bold ">Daily forecast</legend>
          </div>
          <div className="flex gap-4 flex-wrap  text-white">
            {weathercode.slice(0, 7).map((item, i) => (
              <div
                key={i}
                className="bg-[#282241] p-3 rounded-xl flex-1  flex flex-col   items-center "
              >
                <legend className="text-lg">
                  {days[(new Date().getDay() + i) % 7]}
                </legend>
                {weathertogo[i]}

                <div className="flex  w-full mt-2">
                  <div className="mr-auto">
                    {Math.round(currrenttempmin[i])}°
                  </div>
                  <div className="ml-auto">
                    {Math.round(currrenttempmax[i])}°
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#3A3550] flex-1 rounded-xl p-3">
          <div className="flex  items-center justify-between mb-3 gap-10 ">
            <legend className="text-white text-xl font-bold ">
              Hourly forecast
            </legend>
            <div className="flex  items-center bg-[#52526b] rounded-sm gap-3 p-1  px-5 text-lg text-white">
              {currentday}
            </div>
          </div>

          <div className="flex flex-col space-y-3 text-white">
            {hourlyweather.slice(final, final + 9).map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-evenly bg-[#282241] px-2 p-2 rounded-lg"
              >
                <div className="w-9 mr-2">{purehourly[i]}</div>
                {allnext[i]}

                <div className="ml-auto">{Math.round(nexttempcurrent[i])}°</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
