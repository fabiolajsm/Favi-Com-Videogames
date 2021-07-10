//https://api.rawg.io/api/games/4200?key=e717b54950ed4a1f916a7c6784f48d69

// const getAllGames = async (_req, res, next) => {
//     let URL = `${BASE_URL}?key=${API_KEY}`
//     let dataAPI = (await axios.get(URL)).data
//     let dataDB = await Videogame.findAll()
//     for (let i = 0; i <= 5; i++) {        
//         dataAPI.results.push(dataDB)
//         let show = dataAPI.results.map(e => {
//             let obj = {
//                 id: e.id,
//                 name: e.name,
//                 img: e.background_image,
//                 rating: e.rating,
//                 genres: e.genres.map(e => e.name)
//             }
//             return obj
//         })
//         URL = dataAPI.next
//     }
//     res.send('entre')
// };

// const dataDB = Videogame.findAll()
// Promise.all([dataAPI, dataDB])
//     .then((response) => {
//         let [dataAPIResponse, dataDBResponse] = response
//         console.log(dataAPIResponse.data.results,);
//         // console.log(response, 'responseeeeeee');
//         let final = dataDBResponse.concat(dataAPIResponse.data.results).slice(0, 101)
//         console.log(final.length, 'aquiiiiiiiiiiiiiiiiiiii');
//         return res.send(final)
//     })
//     .catch(err => next(err))

// const getGamebyId = async (req, res, _next) => {
//     let { id } = req.params
//     let results = await ONEHUNDRED()
//     if (id && typeof id === 'string') {
//         let filter = results.filter(e => e.id == id)
//         return filter.length > 0 ? res.send(filter) : res.status(404).send(`Sorry! There's no game that match`)
//     }
//     else {
//         return res.status(404).send(`There's no id.`)
//     }
// };
// games.forEach(g => {
//     return g.platforms.forEach(async (e) => {
//         return await Platform.findOrCreate({ where: { name: e } })
//     })
// })

// const getPlatforms = async (_req, res) => {
//     try {
//         let results = []
//         let games = await ONEHUNDRED()  
//         const dataP = await Platform.findAll() 
//         games.forEach(g => {
//             g.platforms.forEach(e => {
//                 results.push(e)
//             })
//         })
//         dataP.forEach(p => {
//             results.push(p.name)
//         })
//         for (let i = 0; i < results.length; i++) {
//             await Platform.findOrCreate({ where: { name: results[i] } })
//         }
//         return res.json(results)
//     }
//     catch (err) {
//         console.log(`Error: ${err}`);
//     }
// }