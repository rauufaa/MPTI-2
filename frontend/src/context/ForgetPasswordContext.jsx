import { createContext, useReducer, useState } from "react"
import { useSendEmail } from "../hooks/useSendEmail";
import { useSendCode } from "../hooks/useSendCode";

export const ACTION_TYPE_PASS = {
  EMAIL: "EMAIL",
  CODE: "CODE",
  REPASS: "REPASS"
}


export const ForgetPasswordContext = createContext()

export const forgetPassReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE_PASS.EMAIL:
      // console.log(action.type)
      return { action: action.payload, email: action.email};
    case ACTION_TYPE_PASS.CODE:
      // console.log(action.type)
      return { ...state, action: action.payload, code: action.code};
    case ACTION_TYPE_PASS.REPASS:
      return { action: ACTION_TYPE_PASS.EMAIL };
    default:
      return state;
  }
}

function ForgetPasswordContextProvider({ children }) {
  // const { isSendEmailError, sendEmail, isSendEmailLoading } = useSendEmail();
  // const { sendCode } = useSendCode();

  const [state, dispatch] = useReducer(forgetPassReducer, {
    action: ACTION_TYPE_PASS.EMAIL
  });

  const [isEmailSuccess, setIsEmailSuccess] = useState("")
  return (
    <ForgetPasswordContext.Provider value={{...state, dispatch }}>
      {children}
    </ForgetPasswordContext.Provider>
  )
}

export default ForgetPasswordContextProvider