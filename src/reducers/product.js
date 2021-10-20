import { eventConstants } from "../managers/eventConstants";

let initialState = {
    productData: [
        {
            name: "Pedigree",
            description: "Dog Food",
            price: "1200",
            quantity: "5"
        }
    ]
}
// return {...state, cartArray: [...state.cartArray, action.payload] };
export default function product(state = initialState, action) {
    console.log("action triggered in product", action)
    switch (action.type) {
        case eventConstants.ADD_PRODUCT_DATA:
            return {
                ...state,
                productData: [...state.productData, action.data]
            }
        case eventConstants.UPDATE_PRODUCT_DATA:
            return {
                ...state,
                productData: action.data
            }
        default:
            return state
    }
}