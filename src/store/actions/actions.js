import { ADD_TOLL, UPDATE_TOLL } from "./actionTypes";


export const addToll = (payload) => {
    return {
        type:ADD_TOLL,
        payload,
    }
}

export const updateToll = (payload) => {
    return {
        type:UPDATE_TOLL,
        payload
    }
}