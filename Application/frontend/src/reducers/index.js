import { combineReducers } from "redux";
import { userSigninReducer, userSignupReducer } from "./userAuthReducer";
import { USER_SIGNOUT } from "../constants/authConstants";
import { taskReducer } from "./taskReducer";
import { hospitalReducer } from "./hospitalReducer";
import { rewardReducer } from "./rewardReducer";

const reducers = combineReducers({
    userSignup: userSignupReducer,
    userSignin: userSigninReducer,
    tasks: taskReducer,
    hospitals: hospitalReducer,
    rewards: rewardReducer,
})

const rootReducer = (state, action) => {
    if (action.type === USER_SIGNOUT) {
        return reducers(undefined, action);
    }
    return reducers(state, action);
};

export default rootReducer;