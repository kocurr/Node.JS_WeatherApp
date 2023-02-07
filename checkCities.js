const fetch = require('node-fetch');
const { appendFile } = require('fs').promises;
const {normalize, resolve} = require('path');

function safeJoin(base, target) {
    const targetPath = `.${normalize(`/${target}`)}`;
    return resolve(base, targetPath);
}

const getCityNameFile = () => safeJoin('./data','availableCities.txt');

const showCities = async (data) => {
    data.forEach(city => {
      appendFile(getCityNameFile(), `${city.stacja}\n`);
      console.log(`${city.stacja}`);
    });
}

const getAllCityNames = async () => {
    try {
      const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
      const data = await res.json();
      await showCities(data);
    } catch (err) {
        console.log('Error has occurred',err);
    }
}
getAllCityNames();