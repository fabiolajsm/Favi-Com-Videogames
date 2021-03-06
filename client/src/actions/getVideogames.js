import axios from 'axios';
import { GET_VIDEOGAMES } from './constants'

export const games = (videogames) => ({
    type: GET_VIDEOGAMES,
    payload: videogames
});

export const getAllGames = () => {
    return (dispatch) => {
        return axios.get(`/videogames`)
            .then(videogames => {
                dispatch(games(videogames.data))
            })
    }
};