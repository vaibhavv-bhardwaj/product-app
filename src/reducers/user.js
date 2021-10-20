import { eventConstants } from "../managers/eventConstants";

let initialState = {
    isLoggedIn: false,
    userData: []
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case eventConstants.LOGIN_USER:
            return {
                ...state,
                userData: action.data,
                isLoggedIn: true,
            }
        case eventConstants.LOGOUT_USER:
            return {
                ...state,
                userData: action.data,
                isLoggedIn: false
            }
        default:
            return state
    }
}