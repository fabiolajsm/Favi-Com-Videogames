require("dotenv").config();
const axios = require("axios");
const { Videogame, Genre, Platform } = require('../db');
let { onehundred } = require('./videogames')
const Sequelize = require('sequelize');
const Op = Sequelize.Op; 
const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.API_KEY

const getGamebyId = async (req, res, _next) => {
    let { id } = req.params
    try {
        let results = await onehundred()
        if (id && typeof id === 'string') {
            let filter = results.filter(e => e.id == id)
            let doesntExist = filter.some(e => e.description == '')
            if (doesntExist) {
                let api = await axios.get(`${BASE_URL}/${id}?key=${API_KEY}`)
                let detail = {
                    img: api.data.background_image,
                    name: api.data.name,
                    genres: api.data.genres.map(e => e.name),
                    description: api.data.description,
                    releaseDate: api.data.released,
                    rating: api.data.rating,
                    platforms: api.data.platforms.map(p => p.platform.name)
                };
                return res.send(detail)
            }
            return filter.length > 0 ? res.send(filter[0]) : res.status(404).send(`Sorry! There's no game that match`)
        }
    }
    catch (err) {
        res.status(404).send(err)
    }
};

const addGame = async (req, res, _next) => {
    const { name, description, img, releaseDate, rating, platforms, genres } = req.body 
    try {
        let exists = await Videogame.findOne({ where: { name: name }, include: Genre })
        if (exists) return res.send('That videogame already exists, try adding another!');

        const newGame = await Videogame.create({
            name: name,
            description: description,
            img: img,
            releaseDate: releaseDate,
            rating: parseInt(rating),
        })

        const Platforms = await Platform.findAll({ 
            where: {
                ID: {
                    [Op.in]: platforms
                }
            }
        });
        await newGame.setPlatforms(Platforms);

        const Genres = await Genre.findAll({
            where: {
                ID: {
                    [Op.in]: genres
                }
            }
        });
        await newGame.setGenres(Genres);

        let game = await Videogame.findOne({ where: { name: name }, include: [Platform, Genre] })
        return res.json(game)
    }
    catch (err) {
        console.log(err, 'heree');
    }
};

module.exports = {
    getGamebyId,
    addGame
};