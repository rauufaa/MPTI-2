import React, { useState } from 'react'
import { useAuthContext } from './useAuthContext'


const fetchTimeOut = async (ms, promise) => {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error('Login TimeOut'))
        }, ms);
        promise.then(
            (res) => {
                clearTimeout(timeoutId);
                resolve(res);
            },
            (err) => {
                clearTimeout(timeoutId);
                reject(new Error("Login Sistem Error"));
            }
        );
    });
}

function useLogout() {
    const [isLoadingLogout, setIsLoadingLogout] = useState(null);
    const [isErrorLogout, setIsErrorLogout] = useState(null);


    const { dispatch } = useAuthContext();

    const logout = async () => {
        setIsErrorLogout(false);
        setIsLoadingLogout(true);
        const user = sessionStorage.getItem("user");

        try {
            const response = await fetchTimeOut(8000, fetch("http://localhost:3000/logout", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: user
            })).then(dat => dat.json())

            if (!response.ok) {
                console.log(response)
                setLoginMessages("Logout Invalid")
                setIsLoadingLogout(false)
                setIsErrorLogout(true)
                return false
            }
            if (response.ok) {
                // save the user to local storage
                // localStorage.setItem('user', JSON.stringify(response.data))
                // sessionStorage.setItem("user", JSON.stringify(response.data))
                sessionStorage.removeItem("user");
                // console.log(localStorage.getItem("user"))
                

                // update the auth context
                dispatch({ type: 'LOGOUT'})

                // update loading state
                setIsLoadingLogout(false)
            }

            return true;
        } catch (error) {
            
        }
        
    }

    return {
        logout, isErrorLogout, isLoadingLogout
    }
}

export default useLogout