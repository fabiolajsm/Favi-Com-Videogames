require("dotenv").config();
const axios = require('axios');
const { Videogame, Genre, Platform } = require('../db');
const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.API_KEY

const onehundred = async function () {
    let promise1 = axios.get(`${BASE_URL}?key=${API_KEY}`);
    let promise2 = axios.get(`${BASE_URL}?key=${API_KEY}&page=2`);
    let promise3 = axios.get(`${BASE_URL}?key=${API_KEY}&page=3`);
    let promise4 = axios.get(`${BASE_URL}?key=${API_KEY}&page=4`);
    let promise5 = axios.get(`${BASE_URL}?key=${API_KEY}&page=5`);
    let promises = await Promise.all([promise1, promise2, promise3, promise4, promise5]);
    let [r1, r2, r3, r4, r5] = promises
    let dataAPI = await [...r1.data.results, ...r2.data.results, ...r3.data.results, ...r4.data.results, ...r5.data.results];
    dataAPI = await dataAPI && dataAPI.map(game => ({
        id: game.id,
        created: false,
        name: game.name,
        description: game.description || '',
        img: game.background_image,
        releaseDate: game.released,
        rating: game.rating,
        platforms: game.platforms.map(p => p.platform.name),
        genres: game.genres.map(g => g.name)
    }));
    let dataDB = await Videogame.findAll({ include: [Genre, Platform] });
    let myData = await dataDB && dataDB.map(game => ({
        id: game.ID,
        created: game.created || true,
        name: game.name,
        description: game.description || '',
        img: game.img,
        releaseDate: game.releaseDate,
        rating: game.rating,
        platforms: game.platforms.map(p => p.name),
        genres: game.genres.map(g => g.name)
    }));
    let allResults = await [...myData, ...dataAPI].slice(0, 101)
    return allResults
};

const getGames = async (req, res) => {
    try {
        const { name } = req.query;
        let allResults = await onehundred()
        if (!name) {
            return res.json(allResults);
        }
        else {
            let has = false
            await allResults.forEach(e => e.name.toLowerCase().includes(name.toLowerCase()) ? has = true : has);
            if (!has) {
                return res.send('Sorry! I dont have that videogame');
            }
            else {
                let filter = allResults.filter(e => e.name.toLowerCase().includes(name.toLowerCase())).slice(0, 16);
                let principalRouteData = filter.map(e => {
                    let obj = {
                        id: e.id,
                        img: e.img,
                        name: e.name,
                        genres: e.genres,
                        rating: e.rating
                    }
                    return obj
                });
                return res.send(principalRouteData)
            }
        }
    }
    catch (err) {
        res.send('Error');
    }
};

module.exports = {
    getGames,
    onehundred
};