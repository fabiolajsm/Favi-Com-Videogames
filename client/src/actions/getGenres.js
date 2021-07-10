import axios from 'axios';
import { GET_GENRES } from './constants'

// export default function getAllGenres() {
//     return function (dispatch) {
//         return fetch(`http://localhost:3001/genres`)
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({ type: GET_GENRES, payload: json });
//             });
//     };
// };

export default function getAllGenres() {
    return async function () {
        try {
            await axios.get("http://localhost:3001/genres")
        }
        catch (err) {
            console.log('Error:', err);
        }
    };
};