import { useState } from "react";
import useForgetPasswordContext from "./useForgetPasswordContext";
import { ACTION_TYPE_PASS } from "../context/ForgetPasswordContext";


function useSendEmail() {
    const [statusSendEmail, setStatusSendEmail] = useState(null);
    const [isErrorSendEmail, setIsErrorSendEmail] = useState(null)
    const [isLoadingSendEmail, setIsLoadingSendEmail] = useState(null)
    const {dispatch} = useForgetPasswordContext()
    const sendEmail = async (email) => {
        // setIsSendEmailLoading(true)
        // setIsSendEmailError(false)
        // setStatusSendEmail(false)
        console.log(email)
        //testing
        setIsLoadingSendEmail(true)
        setIsErrorSendEmail(false)
    
        const response = await fetch("http://localhost:3000/send_email", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email
            })
        }).then(dat=>dat.json())

        if (!response.ok) {
            setIsLoadingSendEmail(false)
            setIsErrorSendEmail(true)
            console.log(response)
        }
        if (response.ok) {
            dispatch({type:ACTION_TYPE_PASS.EMAIL, payload:ACTION_TYPE_PASS.CODE, email: email})
            // save the user to local storage
            // localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            // dispatch({ type: 'LOGIN', payload: response })

            // update loading state
            setIsLoadingSendEmail(false)
        }
    }
    return {
        sendEmail, isErrorSendEmail, isLoadingSendEmail
    }
}

export {useSendEmail}