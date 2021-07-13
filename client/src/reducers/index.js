import { GET_VIDEOGAMES, GET_VIDEOGAME_DETAIL, GET_BY_NAME, ADD_GAME, GET_GENRES, GET_PLATFORMS, ORDER_BY, FILTER_BY } from '../actions/constants';

const initialState = {
    videogames: [],
    filters: [],
    videogame: {},
    detail: {},
    genres: [],
    platforms: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                filters: action.payload // esto llena tmb al filters
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
                videogame: action.payload
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_PLATFORMS:
            return {
                ...state,
                platforms: action.payload
            }
        case ORDER_BY:
            return {
                ...state,
                videogames: [...state.videogames].sort(action.payload) // this is params y me lo ordena
            }
        case FILTER_BY:
            return {
                ...state,
                filters: [...state.videogames].filter(action.payload) // the copy for all games and then filter
            }
        default:
            return state;
    }
}

export default rootReducer;