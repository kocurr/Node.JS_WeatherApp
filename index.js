const fetch = require('node-fetch');
const { appendFile } = require('fs').promises;
const {normalize, resolve} = require('path');

function safeJoin(base, target) {
  const targetPath = `.${normalize(`/${target}`)}`;
  return resolve(base, targetPath);
}

const getDataFileName = city => safeJoin('./data', `${city}.txt`);

const processWeatherData = async (data, cityName) => {
  const foundData =data.find(stationData => stationData.stacja === cityName);

  if(!foundData){
    throw new Error(`There is no such station in our API like ${cityName}`);
  }

  const {
    wilgotnosc_wzgledna: humidity,
    temperatura: temperature,
    cisnienie: pressure,
    godzina_pomiaru: measurement_time,
  } = foundData;
  const weatherInfo = `In ${cityName} is ${temperature}°C, a humidity is ${humidity}% and pressure is ${pressure}hPa.\nLast measurement was at ${measurement_time}:00`;
  console.log(weatherInfo);

  const dateTimeString = new Date().toLocaleString();
  await appendFile(getDataFileName(cityName), `Last update - ${dateTimeString}\n${weatherInfo}`);
}

const checkCityWeather = async cityName => {
  try{
    const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
    const data = await res.json();
    await processWeatherData(data, cityName);
  } catch (err) {
    console.log(err);
  }
}

checkCityWeather('Tarnów');