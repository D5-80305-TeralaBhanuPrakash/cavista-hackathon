import { REWARD_GET_FAILURE, REWARD_GET_REQUEST, REWARD_GET_SUCCESS } from "../constants/rewardConstants";

export const rewardReducer = (state = {}, action) => {
    switch(action.type) {
        case REWARD_GET_REQUEST: 
            return {loading: true};
        case REWARD_GET_SUCCESS: 
            return {loading: false, response: action.payload};
        case REWARD_GET_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}