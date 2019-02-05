import { MAKE_GUESS, RESET_GAME, SET_FEEDBACK } from '../actions';

const initialState = {}

export const tempReducer = (state = initialState, action) => {
    if (action.type === MAKE_GUESS) { }
    else if (action.type === RESET_GAME) { }
    else if (action.type === SET_FEEDBACK) { }
    return state;
}