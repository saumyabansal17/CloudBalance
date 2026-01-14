// authReducer.js
const initialState = {
  user: null,   // { name, role }
  isAuthenticated: false,
  loading:false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return { ...state, loading: true };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false
      };

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
};
