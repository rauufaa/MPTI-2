import { useState } from "react";
import useForgetPasswordContext from "./useForgetPasswordContext";
import { ACTION_TYPE_PASS } from "../context/ForgetPasswordContext";


function useSendRepass() {
    const [statusSendEmail, setStatusSendEmail] = useState(null);
    const [isErrorSendRepass, setIsErrorSendRepass] = useState(null)
    const [isLoadingSendRepass, setIsLoadingSendRepass] = useState(null)
    const {email, code, dispatch} = useForgetPasswordContext()
    const sendRepass = async (password, repassword) => {
        // setIsSendEmailLoading(true)
        // setIsSendEmailError(false)
        // setStatusSendEmail(false)
        console.log(email)
        //testing
        setIsLoadingSendRepass(true)
        setIsErrorSendRepass(false)
        


        const response = await fetch("http://localhost:3000/send_repass", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                code, email, password, repassword
            })
        }).then(dat=>dat.json())

        if (!response.ok) {
            setIsLoadingSendRepass(false)
            setIsErrorSendRepass(true)
            console.log(response)
        }
        if (response.ok) {
            dispatch({type: ACTION_TYPE_PASS.REPASS})

            // type:ACTION_TYPE_PASS.CODE, payload:ACTION_TYPE_PASS.REPASS, email: email, password: password, repassword: repassword
            // save the user to local storage
            // localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            // dispatch({ type: 'LOGIN', payload: response })

            // update loading state
            setIsLoadingSendRepass(false)
        }
    }
    return {
        sendRepass, isErrorSendRepass, isLoadingSendRepass
    }
}

export {useSendRepass}