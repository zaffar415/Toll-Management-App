import {ADD_VEHICLE, DELETE_ALL_VEHICLES} from './actionTypes'

export const addVehicle = (payload) => {    
    return {
        type:ADD_VEHICLE,
        payload,
    }
}

export const deleteAllVehicles = (payload) => {    
    return {
        type:DELETE_ALL_VEHICLES,        
    }
}

