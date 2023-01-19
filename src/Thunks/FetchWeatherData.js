const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
console.log(weatherApiKey);

export const apiGetWeatherCurrentData = async (lat, lon) => {
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`
  );
  const data = await weatherRes.json();
  return data;
};

export const apiGetFiveDayWeatherForcastData = async (lat, lon) => {
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`
  );
  const data = await weatherRes.json();

  const results = data.list.filter((data) => {
    return data.dt_txt.includes("18:00:00");
  });

  return results;
};

export const apiGetHourlyWeatherForcastData = async (lat, lon) => {
  const weatherRes = await fetch(
    `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=35&lon=139&units=imperial&appid=${weatherApiKey}`
  );
  const data = await weatherRes.json();

  return data;
};

export const apiGetCityLatLon = async (city, state) => {
  const latLongRes = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},3166-2:US&limit=10&appid=${weatherApiKey}`
  );
  const latLongJson = await latLongRes.json();
  const cityInfoData = latLongJson[0];
  if (!cityInfoData) {
    alert("Location not found");
    return;
  } else {
    return cityInfoData;
  }
};
