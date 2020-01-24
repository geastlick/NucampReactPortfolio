import * as ActionTypes from './ActionTypes';

export const Users = (state = { currentUser: {} }, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_USER:
            return {...state, currentUser: action.payload};
        case ActionTypes.LOGOUT_USER:
            return {...state, currentUser: {}};
        default:
            return state;
    }
};