import { ORDER_BY, FILTER_BY } from './constants'

export function orderBy(params) {
    return { type: ORDER_BY, payload: params }
};

export function filterBy(params) {
    return { type: FILTER_BY, payload: params }
};