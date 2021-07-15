import { PAGINATE } from './constants'

export const sendPaginate = (videogames) => ({
    type: PAGINATE,
    payload: videogames
});