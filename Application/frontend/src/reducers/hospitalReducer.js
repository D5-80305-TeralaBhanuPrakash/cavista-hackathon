import { HOSPITAL_GET_FAILURE, HOSPITAL_GET_REQUEST, HOSPITAL_GET_SUCCESS } from "../constants/hospitalConstants";


export const hospitalReducer = (state = {}, action) => {
    switch(action.type) {
        case HOSPITAL_GET_REQUEST: 
            return {loading: true};
        case HOSPITAL_GET_SUCCESS: 
            return {loading: false, response: action.payload};
        case HOSPITAL_GET_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}