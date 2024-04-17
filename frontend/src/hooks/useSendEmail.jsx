import { useState } from "react";
import useForgetPasswordContext from "./useForgetPasswordContext";
import { ACTION_TYPE_PASS } from "../context/ForgetPasswordContext";

const fetchTimeOut = async (ms, promise) => {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error('Kirim Email Melampaui Waktu, Ulang!'))
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

function useSendEmail() {
    const [messageSendEmail, setMessageSendEmail] = useState(null);
    const [isErrorSendEmail, setIsErrorSendEmail] = useState(null)
    const [isLoadingSendEmail, setIsLoadingSendEmail] = useState(null)
    const { dispatch } = useForgetPasswordContext()
    const sendEmail = async (email) => {
        // setIsSendEmailLoading(true)
        // setIsSendEmailError(false)
        // setStatusSendEmail(false)
        console.log(email)
        //testing
        setIsLoadingSendEmail(true)
        setIsErrorSendEmail(false)

        try {
            const response = await fetchTimeOut(8000, fetch("http://localhost:3000/send_email", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email
                })
            })).then(dat => dat.json())

            if (!response.ok) {
                setIsLoadingSendEmail(false)
                setIsErrorSendEmail(true)
                console.log(response)
            }
            if (response.ok) {
                dispatch({ type: ACTION_TYPE_PASS.EMAIL, payload: ACTION_TYPE_PASS.CODE, email: email })
                // save the user to local storage
                // localStorage.setItem('user', JSON.stringify(json))

                // update the auth context
                // dispatch({ type: 'LOGIN', payload: response })

                // update loading state
                setIsLoadingSendEmail(false)
            }
        } catch (error) {
            setMessageSendEmail(error.message)
            setIsLoadingSendEmail(false)
            setIsErrorSendEmail(true)
        }




    }
    return {
        sendEmail, isErrorSendEmail, isLoadingSendEmail, messageSendEmail
    }
}

export { useSendEmail }