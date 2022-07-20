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
