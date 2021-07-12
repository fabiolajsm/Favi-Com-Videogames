import axios from 'axios';
import { ADD_GAME, GET_PLATFORMS, GET_GENRES } from './constants'

export const add = (videogame) => ({
    type: ADD_GAME,
    payload: videogame
})

export function addGame(body) {
    return (dispatch) => {
        return axios.post("http://localhost:3001/videogame/post", body)
            .then(videogame => {
                dispatch(add(videogame.data))
            })
    }
}

export const getPlatforms = () => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/platforms`)
            .then(videogame => {
                dispatch({ type: GET_PLATFORMS, payload: videogame.data })
            })
    }
}

export const getGenres = () => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/genres`)
            .then(videogame => {
                dispatch({ type: GET_GENRES, payload: videogame.data })
            })
    }
};