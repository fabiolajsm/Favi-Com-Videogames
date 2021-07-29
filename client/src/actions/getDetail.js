import axios from 'axios';
import { GET_VIDEOGAME_DETAIL } from './constants'

export const getDetail = (videogame) => ({
    type: GET_VIDEOGAME_DETAIL,
    payload: videogame
});

export const getGameById = (id) => {
    return (dispatch) => {
        return axios.get(`/videogame/${id}`)
        .then(videogame => {
            dispatch(getDetail(videogame.data))
        })
    }
};