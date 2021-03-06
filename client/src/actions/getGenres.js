import axios from 'axios';
import { GET_GENRES } from './constants'

export default function getGenres() {
    return (dispatch) => {
        return axios.get(`/genres`)
            .then(videogame => {
                dispatch({ type: GET_GENRES, payload: videogame.data })
            })
    }
};