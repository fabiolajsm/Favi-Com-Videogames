import { ORDER_BY, FILTER_BY, FILTER_BY_GENRE } from './constants'

export function orderBy(params) {
    return { type: ORDER_BY, payload: params }
};

export function filterBy(params) {
    return { type: FILTER_BY, payload: params }
};

export function filterByGenres(state, value) {
    if (value !== 'All') {
        let games = state.filter(vg => vg.genres.includes(value))
        return { type: FILTER_BY_GENRE, payload: games }
    }
    else {
        return { type: FILTER_BY_GENRE, payload: state }
    }
};