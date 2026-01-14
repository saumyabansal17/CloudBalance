// authActions.js
import axios from "axios";
import { getProfile } from "../../api/api";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const logout = () => ({
  type: "LOGOUT",
});

export const fetchUserProfile = () => {
  return async (dispatch) => {
    try {
        // dispatch({ type: FETCH_USER_REQUEST });
      const res = await getProfile();

      dispatch(setUser(res.data));
    } catch (error) {
      localStorage.removeItem("token");
      console.log(error);
      dispatch(logout());
    }
  };
};
