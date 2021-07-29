import axios from 'axios';
import { ADD_GAME } from './constants'

export const add = (videogame) => ({
    type: ADD_GAME,
    payload: videogame
});

export default function addGame(body) {
    return (dispatch) => {
        return axios.post("/videogame/post", body)
            .then(videogame => {
                dispatch(add(videogame.data))
            })
    }
};