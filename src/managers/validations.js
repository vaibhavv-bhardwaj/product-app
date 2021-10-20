import { loginUser, addProduct } from "../actions/action";

const utility = {
    validateEmail,
    validatePassword
}

export default utility

function validateEmail(email) {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

function validatePassword(password) {
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return reg.test(password);
}

export const mapDispatchToProps = (type, data) => {
    return (dispatch) => dispatch(loginUser(type, data));
};

export const mapDispatchProductToProps = (type, data) => {
    return (dispatch) => dispatch(addProduct(type, data));
};

// const mapDispatchToProps = dispatch => ({
//     loginUserHandler: data => dispatch(loginUser(data))
// })