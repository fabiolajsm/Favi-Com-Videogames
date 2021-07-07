require("dotenv").config();
const { Videogame, Genre } = require('../db');  // Genre para el nuevo modelo de genre en el newGame.
let { ONEHUNDRED } = require('./videogames')

const getGamebyId = async (req, res, next) => {   // Obviamente no mostrar el id en el front.
    let { id } = req.params
    let results = await ONEHUNDRED()
    if (id && typeof id === 'string') {
        let filter = results.filter(e => e.id == parseInt(id))
        return filter.length > 0 ? res.send(filter) : res.status(404).send(`Sorry! There's no game that match`)
    }
    else {
        return res.send('Tell me the game to search by id')
    }
};

// POST /videogame:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
// Crea un videojuego en la base de datos
// del front :Ruta de creación de videojuegos: debe contener
//  Un formulario controlado con los siguientes campos
//  Nombre
//  Descripción
//  img 
//  Fecha de lanzamiento
//  Rating

const addGame = async (req, res, next) => {
    const { name, description, img, releaseDate, rating, platforms, genres } = req.body
    try {
        let game = await Videogame.create({
            name,
            description,
            img,
            releaseDate,
            rating,
            platforms
        })  // falta ver como creo un nuevo modelo Genre y se lo uno al game
        // if (genres) {
        //     // let newG = genres.map(async (g) => {
        //     //     await Genre.create({ name: g })
        //     // });
        //     // console.log(newG, 'aquiiii');
        //     await Genre(genres)
        //     game.set()
        //     return res.send(game)
        // }
        return res.send(game)
    }
    catch (err) {
        next(err)
    }
};

module.exports = {
    getGamebyId,
    addGame
};