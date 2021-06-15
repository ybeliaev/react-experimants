import { combineReducers } from 'redux'

import { profileReducer as profile } from './profile'
import { animateReducer as animate } from './animate'

export const reducers = combineReducers({
    profile,
    animate,
})
