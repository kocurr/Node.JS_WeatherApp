const fetch = require('node-fetch');

fetch('https://danepubliczne.imgw.pl/api/data/synop')
    .then((r) => r.json())
    .then((data) => console.log(data));

