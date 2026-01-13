// authActions.js
import axios from "axios";

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
      const res = await axios.get("/api/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      dispatch(setUser(res.data));
    } catch (error) {
      localStorage.removeItem("token");
      dispatch(logout());
    }
  };
};
