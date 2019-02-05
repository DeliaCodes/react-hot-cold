import { MAKE_GUESS, RESET_GAME } from '../actions';

const initialState = {}

export const tempReducer = (state = initialState, action) => {
    if (action.type === MAKE_GUESS) { }
    else if (action.type === RESET_GAME) { }
    return state;
}