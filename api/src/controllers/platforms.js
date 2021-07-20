require("dotenv").config();
const { onehundred } = require('./videogames')
const { Platform } = require('../db');

async function platforms() {
    let results = []
    let games = await onehundred()
    games.forEach(g => {
        g.platforms.forEach(e => {
            results.push(e)
        })
    })
    for (let i = 0; i < results.length; i++) {
        await Platform.findOrCreate({ where: { name: results[i] } })
    }
};

const getPlatforms = async (_req, res) => {
    try {
        let p = await Platform.findAll()
        return res.send(p)
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
};

module.exports = { getPlatforms, platforms };