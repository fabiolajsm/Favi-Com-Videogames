import { GET_VIDEOGAMES, GET_VIDEOGAME_DETAIL, GET_BY_NAME, ADD_GAME, GET_GENRES, GET_PLATFORMS, ORDER_BY, FILTER_BY, FILTER_BY_GENRE, SET_LOADING } from '../actions/constants';

const initialState = {
    videogames: [],
    videogame: {},
    detail: {},
    genres: [],
    filtered: [],
    platforms: [],
    loading: true
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                filtered: action.payload,
                loading: false
            };
        case GET_VIDEOGAME_DETAIL:
            return {
                ...state,
                detail: action.payload
            };
        case GET_BY_NAME:
            return {
                ...state,
                filtered: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
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
                videogames: [...state.videogames].sort(action.payload),
                filtered: [...state.filtered].sort(action.payload)
            }
        case FILTER_BY_GENRE:
            return {
                ...state,
                filtered: action.payload
            }
        case FILTER_BY:
            let copy = state.videogames
            return {
                ...state,
                filtered: [...copy].filter(action.payload),
            }
        default:
            return state;
    }
};

export default rootReducer;