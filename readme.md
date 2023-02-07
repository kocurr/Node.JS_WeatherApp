# Small Weather app

> Simple weather app created with Node.js

## About

* [Introduction](#introduction)
* [Technologies](#technologies-used)
* [Setup](#setup)
* [Project Status](#project-status)
* [Contact](#contact)

## Introduction

The project was created to learn and solidify my knowledge of pure Node.js.
With this application, you can check the weather in a city of your choice in Poland.

## Technologies Used

* Node.js
* Node fetch
* Api (https://danepubliczne.imgw.pl/api/data/synop)

## Setup

To run this project, follow these steps:

1. Clone the repository to your local machine.
    ```sh
   git clone https://github.com/kocurr/Node.JS_WeatherApp.git
2. Open the 'Weather_app' directory as a project in your IDE.
3. Install NPM packages
   ```sh
   npm install
4. After that you can do a few things. Firstly check all available city witch you can use to check the weather. To do that enter:
   ```sh
   node checkCities.js

Result will be shows in the consol or save in the 'data' directory, in the file - 'availableCities.txt'
* To check the weather in a city in Poland, enter:
   ```sh
  node index.js polishCityName

Replace 'polishCityName' with the name of a city from the earlier command

The data will be saved in the 'data' directory, in the following files:

* 'polishCityName.txt' for weather data for a specific city.

## Project Status

Project is: _in progress_

## Contact

Created by kocurr - feel free to contact me!