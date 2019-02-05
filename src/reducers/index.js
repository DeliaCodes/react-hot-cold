import { MAKE_GUESS, RESET_GAME, SET_FEEDBACK, SET_AURAL_STATUS } from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    // should correctAnswer be the equation? or something else?
    correctAnswer: Math.floor(Math.random() * 100) + 1
}

export const tempReducer = (state = initialState, action) => {
    if (action.type === MAKE_GUESS) {
        return Object.assign({}, state, {
            guesses: [...this.state.guesses].push(action.guess)
        });
    }
    else if (action.type === RESET_GAME) {
        //is this right?
        return state;
    }
    else if (action.type === SET_FEEDBACK) {
        return Object.assign({}, state, {
            feedback: action.feedback,
        });
    }
    else if (action.type === SET_AURAL_STATUS) {
        return Object.assign({}, state, {
            auralStatus: action.auralStatus,
        })
    }

    return state;
}