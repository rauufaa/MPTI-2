import { useState } from "react";
import useForgetPasswordContext from "./useForgetPasswordContext";
import { ACTION_TYPE_PASS } from "../context/ForgetPasswordContext";


const fetchTimeOut = async (ms, promise) => {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error('Kirim Password Melampaui Waktu, Ulang!'))
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

function useSendRepass() {
    const [messageSendRepass, setMessageSendEmail] = useState(null);
    const [isErrorSendRepass, setIsErrorSendRepass] = useState(null)
    const [isLoadingSendRepass, setIsLoadingSendRepass] = useState(null)
    const { email, code, dispatch } = useForgetPasswordContext()
    const sendRepass = async (password, repassword) => {
        // setIsSendEmailLoading(true)
        // setIsSendEmailError(false)
        // setStatusSendEmail(false)
        console.log(email)
        //testing
        setIsLoadingSendRepass(true)
        setIsErrorSendRepass(false)

        try {
            const response = await fetchTimeOut(8000,fetch("http://localhost:3000/send_repass", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    code, email, password, repassword
                })
            })).then(dat => dat.json())

            if (!response.ok) {
                setMessageSendEmail("Kesalahan")
                setIsLoadingSendRepass(false)
                setIsErrorSendRepass(true)
                console.log(response)
            }
            if (response.ok) {
                dispatch({ type: ACTION_TYPE_PASS.REPASS })
    
                // type:ACTION_TYPE_PASS.CODE, payload:ACTION_TYPE_PASS.REPASS, email: email, password: password, repassword: repassword
                // save the user to local storage
                // localStorage.setItem('user', JSON.stringify(json))
    
                // update the auth context
                // dispatch({ type: 'LOGIN', payload: response })
    
                // update loading state
                setIsLoadingSendRepass(false)
            }
        } catch (error) {
            messageSendRepass(error.message)
            setIsLoadingSendRepass(false)
            setIsErrorSendRepass(true)
        }





        
    }
    return {
        sendRepass, isErrorSendRepass, isLoadingSendRepass, messageSendRepass
    }
}

export { useSendRepass }