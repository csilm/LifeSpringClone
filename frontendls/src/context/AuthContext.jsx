import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    const role = JSON.parse(localStorage.getItem("role"));

    // console.log(user)
    // console.log(role)

    if (user && role) {
      dispatch({ type: "LOGIN", payload: {user:user, role:role} });
      // console.log(dispatch(payload))payload: { user: data }
    }
  }, []);

  // console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
