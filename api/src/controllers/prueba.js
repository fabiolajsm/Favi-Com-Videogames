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
///////////////////////////
// const getGamesByName = (req, res, next) => {
//     const { name } = req.query
//     if (!name) return res.send('Ups! That game doesnt exist in our database:(')
//     else {
//         const dataAPI = axios.get(`${BASE_URL}?key=${API_KEY}`)
//         const dataDB = Videogame.findAll()
//         Promise.all([dataAPI, dataDB])
//             .then((response) => {
//                 let [dataAPIResponse, dataDBResponse] = response
//                 let allResults = dataDBResponse.concat(dataAPIResponse.data.results)
//                 let has = false
//                 allResults.forEach(e => e.name.includes(name) ? has = true : has);
//                 if (!has) {
//                     return res.status(404).send('Sorry! I dont have that videogame')
//                 }
//                 else {
//                     let filter = allResults.filter(e => e.name.includes(name));
//                     let fiften = filter.slice(0, 16);
//                     return res.send(fiften)
//                 }
//             })
//             .catch(err => next(err))
//     }
// };

//pruebaaaaa
// const getGamebyId = (req, res, next) => {
//     let r1 = axios.get(`${BASE_URL}?key=${API_KEY}`)
//     let r2 = axios.get(`${BASE_URL}?key=${API_KEY}&page=2`);
//     let r3 = axios.get(`${BASE_URL}?key=${API_KEY}&page=3`);
//     let r4 = axios.get(`${BASE_URL}?key=${API_KEY}&page=4`);
//     let r5 = axios.get(`${BASE_URL}?key=${API_KEY}&page=5`)
//     const dataDB = Videogame.findAll()
//     const { id } = req.params
//     Promise.all([r1, r2, r3, r4, r5, dataDB])
//         .then((response) => {
//             let [rs1, rs2, rs3, rs4, rs5, dataDBResponse] = response
//             let allResults = [...dataDBResponse, rs1.data.results, rs2.data.results, rs3.data.results, rs4.data.results, rs5.data.results]
//             console.log(allResults, 'ooooooooooooooooooooooooooooo' );
//             if (id && typeof id === 'string') {
//                 let filter = allResults[0].filter(e => e.id == id)
//                 let dataDetail = filter.map(e => {
//                     let obj = {
//                         id: e.id,
//                         name: e.name,
//                         img: e.background_image,
//                         genre: e.genres,
//                         description: e.description || '',
//                         releaseDate: e.released,
//                         rating: e.rating,
//                         platforms: e.platforms
//                     }
//                     return obj
//                 });
//                 return dataDetail.length > 0 ? res.send(dataDetail) : res.status(404).send(`Sorry! There's no game that match`)
//             }
//         })
//         .catch(err => {
//             next(err)
//         })
// };
[
    {
        "platform": {
            "id": 14,
            "name": "Xbox 360",
            "slug": "xbox360",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 2718,
            "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        },
        "released_at": "2011-04-19",
        "requirements_en": null,
        "requirements_ru": null
    },
    {
        "platform": {
            "id": 5,
            "name": "macOS",
            "slug": "macos",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 74213,
            "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
        },
        "released_at": null,
        "requirements_en": null,
        "requirements_ru": null
    },
    {
        "platform": {
            "id": 6,
            "name": "Linux",
            "slug": "linux",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 52357,
            "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
        },
        "released_at": "2011-04-19",
        "requirements_en": null,
        "requirements_ru": null
    },
    {
        "platform": {
            "id": 4,
            "name": "PC",
            "slug": "pc",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 342462,
            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
        },
        "released_at": null,
        "requirements_en": null,
        "requirements_ru": {
            "minimum": "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
            "recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
        }
    },
    {
        "platform": {
            "id": 16,
            "name": "PlayStation 3",
            "slug": "playstation3",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 3624,
            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
        },
        "released_at": "2011-04-19",
        "requirements_en": null,
        "requirements_ru": null
    },
    {
        "platform": {
            "id": 1,
            "name": "Xbox One",
            "slug": "xbox-one",
            "image": null,
            "year_end": null,
            "year_start": null,
            "games_count": 4671,
            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
        },
        "released_at": "2011-04-18",
        "requirements_en": null,
        "requirements_ru": null
    }
]

// const getGames = async (req, res) => {
//     const { name } = req.query;
//     let r1 = await axios.get(`${BASE_URL}?key=${API_KEY}`);
//     let r2 = await axios.get(`${BASE_URL}?key=${API_KEY}&page=2`);
//     let r3 = await axios.get(`${BASE_URL}?key=${API_KEY}&page=3`);
//     let r4 = await axios.get(`${BASE_URL}?key=${API_KEY}&page=4`);
//     let r5 = await axios.get(`${BASE_URL}?key=${API_KEY}&page=5`);
//     let dataAPI = await [...r1.data.results, ...r2.data.results, ...r3.data.results, ...r4.data.results, ...r5.data.results];
//     dataAPI = await dataAPI && dataAPI.map(game => ({
//         id: game.id,
//         name: game.name,
//         description: game.description,
//         img: game.background_image,
//         releaseDate: game.released,
//         rating: game.rating,
//         platforms: game.platforms.map(p => p.platform.name),
//         genres: game.genres.map(g => g.name)
//     }))
//     let dataDB = await Videogame.findAll();
//     let allResults = await [...dataAPI, ...dataDB].slice(0, 101)
//     if (!name) {
//         return res.json(allResults);
//     }
//     else {
//         let has = false
//         await allResults.forEach(e => e.name.toLowerCase().includes(name.toLowerCase()) ? has = true : has);
//         if (!has) {
//             return res.status(404).send('Sorry! I dont have that videogame')
//         }
//         else {
//             let filter = allResults.filter(e => e.name.includes(name));
//             let fiften = filter.slice(0, 16);
//             return res.send(fiften)
//         }
//     }
// };

// const getGamebyId = async (req, res, next) => {
//     const { id } = req.params
//     let r1 = await axios.get(`${BASE_URL}?key=${API_KEY}`);
//     let r2 = await axios.get(`${BASE_URL}?key=${API_KEY}&page=2`);
//     let r3 = await axios.get(`${BASE_URL}?key=${API_KEY}&page=3`);
//     let r4 = await axios.get(`${BASE_URL}?key=${API_KEY}&page=4`);
//     let r5 = await axios.get(`${BASE_URL}?key=${API_KEY}&page=5`);
//     let dataAPI = await [...r1.data.results, ...r2.data.results, ...r3.data.results, ...r4.data.results, ...r5.data.results];
//     dataAPI = await dataAPI && dataAPI.map(game => ({
//         id: game.id,
//         name: game.name,
//         description: game.description,
//         img: game.background_image,
//         releaseDate: game.released,
//         rating: game.rating,
//         platforms: game.platforms,
//         genres: game.genres
//     }))
//     let dataDB = await Videogame.findAll();
//     let results = await [...dataAPI, ...dataDB]
//     console.log(results.length, 'aquiiii...');
//     if (id && typeof id === 'string') {
//         let filter = results.filter(e => e.id == parseInt(id))
//         let dataDetail = filter.map(e => {
//             // console.log(e, 'eeeeeeeeeeeeeeeeeeeeeeee');
//             let obj = {
//                 id: e.id,
//                 name: e.name,
//                 img: e.background_image,
//                 genre: e.genres.map(g => g.name),
//                 description: e.description || '',
//                 releaseDate: e.released,
//                 rating: e.rating,
//                 platforms: e.platforms.map(p => p.platform.name)
//             }
//             return obj
//         });
//         return dataDetail.length > 0 ? res.send(dataDetail) : res.status(404).send(`Sorry! There's no game that match`)
//     }
//     else {
//         return res.send('Tell me the game to search by id')
//     }
// };


"Aqui las pruebas de las rutas Genres"

// async function fillGenre() {
//     try {
//         const api = await axios.get(`${GENRE_URL}?key=${API_KEY}`)
//         for (let i = 0; i < api.data.results.length; i++) {
//             await Genre.findOrCreate({
//                 where: {
//                     name: api.data.results[i].name,
//                 }
//             })
//         }
//     }
//     catch (err) {
//         console.log(`Error: ${err}`);
//     }
// }
// fillGenre()

// const getAllGenres = async (_req, res) => {
//     try {
//         let results = []
//         const dataGenre = await Genre.findAll()
//         dataGenre.forEach(e => {
//             results.push(e.name)
//         });
//         return res.send(results)
//     }
//     catch (err) {
//         console.log(`Error: ${err}`);
//     }
// }