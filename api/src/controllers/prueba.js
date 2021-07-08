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