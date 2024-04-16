import { createContext, useReducer } from "react"

const ACTION_TYPE = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
}


export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGIN:
      return {user: action.payload};
    case ACTION_TYPE.LOGOUT:
      return {user: null};
    default:
      return state;
  }
}

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  });
  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider