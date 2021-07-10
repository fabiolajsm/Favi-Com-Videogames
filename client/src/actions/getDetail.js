import axios from 'axios';
import { GET_VIDEOGAME_DETAIL } from './constants'

export const getDetail = (videogame) => ({
    type: GET_VIDEOGAME_DETAIL,
    payload: videogame
})

export const getGameById = (id) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/videogame/${id}`)
        .then(videogame => {
            console.log(videogame, 'videogameeeeeeeeeeeeeeeeeeeeee');
            dispatch(getDetail(videogame.data))
        })
    }
};
// export default function getGameById(id) {
//     return function (dispatch) {
//         return axios.get(`http://localhost:3001/videogame/${id}`) // lo pasa asi?
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({ type: GET_VIDEOGAME_DETAIL, payload: json });
//             });
//     };
// };