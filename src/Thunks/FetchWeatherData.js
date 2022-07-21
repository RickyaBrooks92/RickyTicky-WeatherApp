export const apiGetWeatherCurrentData = async (lat, lon) => {
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=ae93a8df4eb012916dd53498f4b2cc0a`
  );
  const data = await weatherRes.json();
  return data;
};

export const apiGetFiveDayWeatherForcastData = async (lat, lon) => {
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=ae93a8df4eb012916dd53498f4b2cc0a`
  );
  const data = await weatherRes.json();
  console.log(data);
  return data;
};

export const apiGetHourlyWeatherForcastData = async (lat, lon) => {
  const weatherRes = await fetch(
    `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=35&lon=139&units=imperial&appid=ae93a8df4eb012916dd53498f4b2cc0a`
  );
  const data = await weatherRes.json();
  console.log(data);
  return data;
};

export const apiGetCityData = async (city, state) => {
  const latLongRes = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},3166-2:US&limit=10&appid=ae93a8df4eb012916dd53498f4b2cc0a`
  );
  const latLongJson = await latLongRes.json();
  const cityInfoData = latLongJson[0];

  if (!cityInfoData) {
    alert('Location not found');
    return;
  }
  const cityInfoRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${cityInfoData.lat}&lon=${cityInfoData.lon}&units=imperial&appid=ae93a8df4eb012916dd53498f4b2cc0a`
  );
  const cityInfoJson = await cityInfoRes.json();
  return cityInfoJson;
};
