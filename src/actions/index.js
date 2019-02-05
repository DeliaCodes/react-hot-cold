// are there other actions a user can do?
export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuessAction = guess => ({
    type: MAKE_GUESS,
    guess
})

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
    type: RESET_GAME
})

export const SET_FEEDBACK = 'SET_FEEDBACK';
export const setFeedback = feedback => ({
    type: SET_FEEDBACK,
    feedback
})

export const SET_AURAL_STATUS = 'SET_AURAL_STATUS';
export const setAuralFeedback = auralFeedback => ({
    type: SET_AURAL_STATUS,
    auralFeedback
})
