import reducer from './index';

describe('Reducer', () => {
    it('should return an initial state', () => {
        const initialState = {
            videogames: [],
            videogame: {},
            detail: {},
            genres: [],
            filtered: [],
            platforms: [],
            loading: true,
        }
        expect(reducer(undefined, [])).toEqual(initialState)
    });
});