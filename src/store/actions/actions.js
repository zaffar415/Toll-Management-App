import { ADD_TOLL, UPDATE_TOLL, DELETE_ALL_TOLLS } from "./actionTypes";


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

export const deleteAllTolls = (payload) => {
    return {
        type:DELETE_ALL_TOLLS,
    }
}