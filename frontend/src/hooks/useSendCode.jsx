import { useState } from "react"
import useForgetPasswordContext from "./useForgetPasswordContext"
import { ACTION_TYPE_PASS } from "../context/ForgetPasswordContext"


const fetchTimeOut = async (ms, promise) => {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error('Kirim Kode Melampaui Waktu'))
        }, ms);
        promise.then(
            (res) => {
                clearTimeout(timeoutId);
                resolve(res);
            },
            (err) => {
                clearTimeout(timeoutId);
                reject(new Error("Sistem Error"));
            }
        );
    });
}
function useSendCode() {
    // const [statusSendEmail, setStatusSendEmail] = useState(false);
    const [isErrorSendCode, setIsErrorSendCode] = useState(null)
    const [isLoadingSendCode, setIsLoadingSendCode] = useState(null)
    const [messageSendCode, setMessageSendCode] = useState(null)
    const { email, dispatch } = useForgetPasswordContext()
    const sendCode = async (code) => {
        setIsErrorSendCode(false)
        setIsLoadingSendCode(true)
        // dispatch({type:ACTION_TYPE_PASS.CODE, payload:ACTION_TYPE_PASS.REPASS})
        console.log(email)



        try {
            const response = await fetchTimeOut(8000, fetch("http://localhost:3000/send_code", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    code,
                    email
                })
            })).then(dat => dat.json())

            if (!response.ok) {
                setIsLoadingSendCode(false)
                setIsErrorSendCode(true)
                console.log(response)
            }
            if (response.ok) {
                dispatch({ type: ACTION_TYPE_PASS.CODE, payload: ACTION_TYPE_PASS.REPASS, code: code })
                // save the user to local storage
                // localStorage.setItem('user', JSON.stringify(json))

                // update the auth context
                // dispatch({ type: 'LOGIN', payload: response })

                // update loading state
                setIsLoadingSendCode(false)
            }

        } catch (error) {
            setMessageSendCode(error.message)
            setIsLoadingSendCode(false)
            setIsErrorSendCode(true)
        }


    }
    return {
        sendCode, isErrorSendCode, isLoadingSendCode, messageSendCode
    }
}

export { useSendCode }