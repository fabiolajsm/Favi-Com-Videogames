require("dotenv").config();
const axios = require('axios');
const GENRE_URL = process.env.GENRE_URL
const API_KEY = process.env.API_KEY
const { Genre } = require('../db');

// 1) Obtener todos los tipos de géneros de videojuegos posibles
// En una primera instancia deberán traerlos desde rawg
// y guardarlos en su propia base de datos y luego ya utilizarlos desde ahí (khe?????????????

// no se si esto sirva, en teoria, cuando quiera agregar generos, invocaria a addGenres, y en la otra mostraria todo y borralo.
// !! falta ver como crearlo en mi base de datos
const addGenres = async (req, res) => {
    let { name } = req.body
    try {
        let newG = await Genre.findOrCreate({
            where: { name: name }
        })
        return res.json(newG)
    }
    catch (err) {
        next(err)
    }
}

const getAllGenres = async (req, res) => {
    try {
        let results = []
        const dataGenre = await Genre.findAll()
        const api = await axios.get(`${GENRE_URL}?key=${API_KEY}`)
        let response = dataGenre.concat(api.data.results)
        response.forEach(e => {
            results.push(e.name)
        });
        return res.send(results)
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
}

// lo que trae la API:
// [
//     "Action",
//     "Indie",
//     "Adventure",
//     "RPG",
//     "Strategy",
//     "Shooter",
//     "Casual",
//     "Simulation",
//     "Puzzle",
//     "Arcade",
//     "Platformer",
//     "Racing",
//     "Massively Multiplayer",
//     "Sports",
//     "Fighting",
//     "Family",
//     "Board Games",
//     "Educational",
//     "Card"
// ]
module.exports = { getAllGenres, addGenres };