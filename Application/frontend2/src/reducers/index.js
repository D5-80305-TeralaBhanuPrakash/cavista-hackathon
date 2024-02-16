import { combineReducers } from "redux";
import { userSigninReducer, userSignupReducer } from "./userAuthReducer";
import { USER_SIGNOUT } from "../constants/authConstants";

const reducers = combineReducers({
    userSignup: userSignupReducer,
    userSignin: userSigninReducer,
})

const rootReducer = (state, action) => {
    if (action.type === USER_SIGNOUT) {
        return reducers(undefined, action);
    }
    return reducers(state, action);
};

export default rootReducer;