import { createContext, useEffect, useMemo, useReducer, useState } from "react"
import { useSessionStorage } from "../hooks/useSessionStorage";

export const ACTION_TYPE = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
}


export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGIN:
      return { user: action.payload };
    case ACTION_TYPE.LOGOUT:
      return { user: null };
    default:
      return state;
  }
}

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  });

  const [statu, setStatu] = useState(null)

  const { getUserLogin } = useSessionStorage()

  useEffect(() => {
    const user = getUserLogin();
    if (user) {
      dispatch({ type: ACTION_TYPE.LOGIN, payload: user })
      setStatu(true)
    }
    console.log(user)
    
    return ()=>{

    }
  }, [])

  // const value = useMemo(()=>(
  //   {
  //     ...state,
  //     dispatch
  //   }
  // ))

  console.log('AuthContext state:', state)
  return (
    <AuthContext.Provider value={{ ...state, dispatch, statu}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider