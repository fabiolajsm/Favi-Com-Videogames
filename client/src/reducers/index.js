import { GET_VIDEOGAMES, GET_VIDEOGAME_DETAIL, GET_BY_NAME, ADD_GAME, GET_GENRES } from '../actions/constants';

const initialState = {
    videogames: [],
    detail: {},
    genres: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload
            };
        case GET_VIDEOGAME_DETAIL:
            return {
                ...state,
                detail: action.payload
            };
        case GET_BY_NAME:
            return {
                ...state,
                videogames: action.payload
            };
        case ADD_GAME:
            return {
                ...state,
                videogames: action.payload
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;