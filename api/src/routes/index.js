const { Router } = require('express');
const { getGames } = require('../controllers/videogames')
const { getGamebyId, addGame } = require('../controllers/videogame')
const { getAllGenres } = require('../controllers/genres')

const router = Router();

router.use('/videogames', getGames);
router.get('/videogame/:id', getGamebyId);
router.post('/videogame/post', addGame);
router.use('/genres', getAllGenres);

module.exports = router;