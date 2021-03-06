require("dotenv").config();
const axios = require('axios');
const GENRE_URL = process.env.GENRE_URL
const API_KEY = process.env.API_KEY
const { Genre } = require('../db');

const getAllGenres = async (_req, res) => {
    try {
        let results = []
        const api = await axios.get(`${GENRE_URL}?key=${API_KEY}`)
        const dataGenre = await Genre.findAll()
        let response = dataGenre.concat(api.data.results)
        response.forEach(e => {
            results.push(e.name)
        });
        for (let i = 0; i < results.length; i++) {
            await Genre.findOrCreate({
                where: { name: results[i] }
            })
        }
        let all = await Genre.findAll()
        return res.json(all)
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
};

module.exports = { getAllGenres };