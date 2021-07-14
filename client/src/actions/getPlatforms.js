import axios from 'axios';
import { GET_PLATFORMS } from './constants'

export const getPlatforms = () => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/platforms`)
            .then(videogame => {
                dispatch({ type: GET_PLATFORMS, payload: videogame.data })
            })
    }
}