import {ADD_VEHICLE, DELETE_ALL_VEHICLES} from '../actions/actionTypes'

const initialState = [];

export default (state = initialState, action) => {

    switch(action.type) {
        case ADD_VEHICLE : 
            return [
                ...state, 
                action.payload,
            ];

        case DELETE_ALL_VEHICLES : 
            return initialState;

        default : 
            return state;
    }
}