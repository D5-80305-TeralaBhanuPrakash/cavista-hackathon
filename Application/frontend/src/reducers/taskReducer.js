import { TASK_GET_FAILURE, TASK_GET_REQUEST, TASK_GET_SUCCESS } from "../constants/taskConstants";

export const taskReducer = (state = {}, action) => {
    switch(action.type) {
        case TASK_GET_REQUEST: 
            return {loading: true};
        case TASK_GET_SUCCESS: 
            return {loading: false, response: action.payload};
        case TASK_GET_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}