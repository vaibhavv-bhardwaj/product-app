import { eventConstants } from "../managers/eventConstants";

export const loginUser = (data, dispatch) => {
    return {
        type: eventConstants.LOGIN_USER,
        // tye: data,
        data: dispatch
    }
}

export const logoutUser = (data) => {
    return {
        type: eventConstants.LOGOUT_USER,
        data: data
    }
}

export const addProduct = (data, dispatch) => {
    return {
        type: eventConstants.ADD_PRODUCT_DATA,
        data: dispatch
    }
}