import {ADD_TOLL, DELETE_ALL_TOLLS, UPDATE_TOLL} from '../actions/actionTypes'

const initialState = [];

// eslint-disable-next-line
export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TOLL :             
            return [    
                ...state,            
                action.payload,                
            ] 

        case UPDATE_TOLL : 
            return action.payload;            

        case DELETE_ALL_TOLLS : 
            return initialState;            

        default :
            return state;

    }
}
