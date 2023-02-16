const fetch = require('node-fetch');

const processWeatherData = async (data) => {
    const sorted = [...data].sort((a, b) => {
        if (Number(a.temperatura) > Number(b.temperatura)) {
            return -1;
        }

        if (b.temperatura > a.temperatura) {
            return 1;
        }
        return 0;
    });

    const {
        stacja: station,
        temperatura: temperature,
    } = sorted[0];

    console.log(`The warmest place in Poland is ${station} where is a ${temperature} st. C`);
};

const findWarmestPlaceInPoland = async () => {
    try {
        const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
        const data = await res.json();
        await processWeatherData(data);
    } catch (error) {
        console.log('Error has occurred ;(');
    }
};

findWarmestPlaceInPoland();
