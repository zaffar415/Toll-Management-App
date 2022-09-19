import {ADD_TOLL, UPDATE_TOLL} from '../actions/actionTypes'

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

        default :
            return state;

    }
}
