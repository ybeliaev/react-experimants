import { animateActionTypes } from './action'

const initialState = {
    startAnimate: false,
}

export const animateReducer = (state = initialState, action) => {
    switch (action.type) {
        case animateActionTypes:
            return { ...state, startAnimate: action.payload }

        default:
            return state
    }
}
