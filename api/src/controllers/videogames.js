require("dotenv").config();
const axios = require('axios');
const { Videogame } = require('../db');
const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.API_KEY

const ONEHUNDRED = async function () {
    let r1 = await axios.get(`${BASE_URL}?key=${API_KEY}`);
    let r2 = await axios.get(`${BASE_URL}?key=${API_KEY}&page=2`);
    let r3 = await axios.get(`${BASE_URL}?key=${API_KEY}&page=3`);
    let r4 = await axios.get(`${BASE_URL}?key=${API_KEY}&page=4`);
    let r5 = await axios.get(`${BASE_URL}?key=${API_KEY}&page=5`);
    let dataAPI = await [...r1.data.results, ...r2.data.results, ...r3.data.results, ...r4.data.results, ...r5.data.results];
    dataAPI = await dataAPI && dataAPI.map(game => ({
        id: game.id,
        name: game.name,
        description: game.description || '',
        img: game.background_image,
        releaseDate: game.released,
        rating: game.rating,
        platforms: game.platforms.map(p => p.platform.name),
        genres: game.genres.map(g => g.name)
    }))
    let dataDB = await Videogame.findAll();
    let allResults = await [...dataAPI, ...dataDB].slice(0, 101)
    return allResults
};

const getGames = async (req, res) => {
    const { name } = req.query;
    let allResults = await ONEHUNDRED()
    if (!name) {
        return res.json(allResults);
    }
    else {
        let has = false
        await allResults.forEach(e => e.name.toLowerCase().includes(name.toLowerCase()) ? has = true : has);
        if (!has) {
            return res.status(404).send('Sorry! I dont have that videogame')
        }
        else {
            let filter = allResults.filter(e => e.name.includes(name)).slice(0, 16);
            let principalRouteData = filter.map(e => {
                let obj = {
                    img: e.img,
                    name: e.name,
                    genres: e.genres
                }
                return obj
            })
            return res.send(principalRouteData)
        }
    }
};

module.exports = {
    getGames,
    ONEHUNDRED
};