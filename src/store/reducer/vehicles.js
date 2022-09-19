import {ADD_VEHICLE} from '../actions/actionTypes'

const initialState = [];

export default (state = initialState, action) => {

    switch(action.type) {
        case ADD_VEHICLE : 
            return [
                ...state, 
                action.payload,
            ];

        default : 
            return state;
    }
}