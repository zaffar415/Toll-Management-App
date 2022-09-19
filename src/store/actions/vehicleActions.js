import {ADD_VEHICLE} from './actionTypes'

export const addVehicle = (payload) => {    
    return {
        type:ADD_VEHICLE,
        payload,
    }
}


