import axios from 'axios';
import { GET_BY_NAME, SET_LOADING } from './constants'

export const games = (videogames) => ({
    type: GET_BY_NAME,
    payload: videogames
});

export const loading = (loading) => ({
    type: SET_LOADING,
    payload: loading
});

export const getByName = (name) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/videogames?name=${name}`)
            .then(videogames => {
                if (videogames.data === "Sorry! I dont have that videogame") {
                    let notFound = [{
                        id: "Game not found",
                        img: "https://i.pinimg.com/564x/5f/92/5a/5f925a4b065b191e76aed89ab4d94d17.jpg",
                        name: "Game not found",
                        genres: ["not found"]
                    }];
                    dispatch(games(notFound));
                }
                else {
                    dispatch(games(videogames.data))
                }
            });
    }
};