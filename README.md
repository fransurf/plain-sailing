# Geollect technical test

## Table of contents

1. [Project overview](README.md#project-4---women-that-shred)
2. [Brief](README.md#brief)
3. [Run Instructions](README.md#brief)
4. [Technologies](README.md#technologies)
5. [Future improvements](README.md#key-learning--future-improvements)

# Project 4 - ‘Plain-sailing’
Plain-sailing is a website for clients to track the locations of their vessels, as well as gather specific information about each vessel & its history. It is created with Geollect's brand styling in mind in order to present a new product that is brand-consistent. Different types of vessels (without the API I made these up), show on the map with different icons for easy distinction. I couldn't resist a few bad puns - these wouldn't persist into production.

## Brief
A 'client' has come forward and has asked us to deliver them a POC.

* The client would like to be able to see the locations of their 10 vessels on an interactive map.
* After clicking a vessel, the client wants to be presented with additional vessel information
* The client would like to be able to see where their vessel has been over the last 7 days
* The client would like the application to be written in typescript and react
* The client would like you to use MapBox GL.
* The client would like to easily differentiate between different vessel types on the map


## Run instructions
For this project I have used yarn package manager. To run the code in your local host, please open up a terminal within the main project directory ('Plain-sailing') and run `yarn start`. You may also use `npm start`.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Technologies
Mapbox GL | React.js | Javascript | SASS | Axios 

## Future improvements
* Firstly, I would convert to TypeScript - I have not used this language before, I have looked into it & am confident I would pick it up quickly
* I did not manage to get the Vessel History up & running - I can pull it through but for some reason, not onClick of the 'See History' button
* Ideally, I would also have liked to create a function that made the map load on the centre of all points, to make it dynamic across users
* I would also have liked to have componentised the mapbox functions, but couldn't immediately see how this was done without forcing errors(see helpers/MapFunctions)
* I was also planning on using a flag api (see helpers/GetFlags) to bring in relevant country flags


