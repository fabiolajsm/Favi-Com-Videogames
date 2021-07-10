import axios from 'axios';
import { ADD_GAME } from './constants'

export default function addGame(body) {
    return async function () {
        try {
            await axios.post("http://localhost:3001/videogames/post", body)
        }
        catch (err) {
            console.log('Error:', err);
        }

    }
};
// { type: ADD_GAME, payload: body };