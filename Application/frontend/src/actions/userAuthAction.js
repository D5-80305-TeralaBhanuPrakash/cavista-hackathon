import {
  USER_SIGNIN_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/authConstants";
import { HOSPITAL_GET_FAILURE, HOSPITAL_GET_REQUEST, HOSPITAL_GET_SUCCESS } from "../constants/hospitalConstants";
import { REWARD_GET_FAILURE, REWARD_GET_REQUEST, REWARD_GET_SUCCESS } from "../constants/rewardConstants";
import { TASK_GET_REQUEST, TASK_GET_SUCCESS } from "../constants/taskConstants";

export const signin = (userDetails, toast, navigate) => (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
  });

  fetch("http://172.18.4.119:8080/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 500) {
        dispatch({
          type: USER_SIGNIN_FAILURE,
          payload: "Invalid Credentials",
          authenticate: false,
        });
        toast.error("Invalid Credentials");
      } else {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: data,
          authenticate: true,
        });
        toast.success("Login successful");
        navigate("/user/home");
      }
    })
    .catch((error) => {
      dispatch({
        type: USER_SIGNIN_FAILURE,
        payload: "Invalid Credentials",
        authenticate: false,
      });
      toast.error("Invalid Credentials");
    });
};

export const signup = (userDetails, toast) => (dispatch) => {
  dispatch({
    type: USER_SIGNUP_REQUEST,
  });

  fetch("http://172.18.4.119:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: data,
      });
      toast.success("Registration successful");
    })
    .catch((error) => {
      dispatch({
        type: USER_SIGNUP_FAILURE,
        payload: "Registration error!!",
      });
      toast.error("Registration error");
    });
};

export const logout = (toast, navigate) => (dispatch) => {
  dispatch({
    type: USER_SIGNOUT,
  });
  toast.success("Logged Out Successfully");
  navigate("/");
};

export const getAllTasks = (token) => (dispatch) => {
  dispatch({
    type: TASK_GET_REQUEST,
  });

  fetch("http://172.18.4.119:8080/tasks/get/Diabetes", {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
        dispatch({
          type: TASK_GET_SUCCESS,
          payload: data,
        });
    })
    .catch((error) => {
      dispatch({
        type: TASK_GET_SUCCESS,
        payload: "error",
      });
    });
};

export const getAllHospitals = (token) => (dispatch) => {
  dispatch({
    type: HOSPITAL_GET_REQUEST,
  });

  fetch("http://172.18.4.119:8080/hospital", {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
        dispatch({
          type: HOSPITAL_GET_SUCCESS,
          payload: data,
        });
    })
    .catch((error) => {
      dispatch({
        type: HOSPITAL_GET_FAILURE,
        payload: "error",
      });
    });
};

export const getRewards = (token, userId, taskId, toast) => (dispatch) => {
  dispatch({
    type: REWARD_GET_REQUEST,
  });

  fetch(`http://172.18.4.119:8080/completed-tasks/${userId}/${taskId}`, {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + token,
    }
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: REWARD_GET_SUCCESS,
        payload: data,
      });
      toast.success(`Rewarded 1 point`);
    })
    .catch((error) => {
      dispatch({
        type: REWARD_GET_FAILURE,
        payload: "error",
      });
      toast.error("Error");
    });
};