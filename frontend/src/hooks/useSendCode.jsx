import { useState } from "react"
import useForgetPasswordContext from "./useForgetPasswordContext"
import { ACTION_TYPE_PASS } from "../context/ForgetPasswordContext"

function useSendCode() {
    // const [statusSendEmail, setStatusSendEmail] = useState(false);
    const [isErrorSendCode, setIsErrorSendCode] = useState(null)
    const [isLoadingSendCode, setIsLoadingSendCode] = useState(null)
    const { email,dispatch } = useForgetPasswordContext()
    const sendCode = async (code) => {
        setIsErrorSendCode(false)
        setIsLoadingSendCode(true)
        // dispatch({type:ACTION_TYPE_PASS.CODE, payload:ACTION_TYPE_PASS.REPASS})
        console.log(email)

        const response = await fetch("http://localhost:3000/send_code", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                code,
                email
            })
        }).then(dat=>dat.json())

        if (!response.ok) {
            setIsLoadingSendCode(false)
            setIsErrorSendCode(true)
            console.log(response)
        }
        if (response.ok) {
            dispatch({type:ACTION_TYPE_PASS.CODE, payload:ACTION_TYPE_PASS.REPASS, code:code})
            // save the user to local storage
            // localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            // dispatch({ type: 'LOGIN', payload: response })

            // update loading state
            setIsLoadingSendCode(false)
        }
    }
    return {
        sendCode, isErrorSendCode, isLoadingSendCode
    }
}

export { useSendCode }