import React, { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useSessionStorage } from './useSessionStorage';


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
        const {getUserLogin} = useSessionStorage()
        console.log(getUserLogin().token)

        try {
            const response = await fetchTimeOut(8000, fetch("http://localhost:3000/logout", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' ,
            'Authorization': getUserLogin().token},
                body: JSON.stringify(getUserLogin())
            })).then(dat => dat.json())

            if (!response.ok) {
                console.log(response)
                // setLoginMessages("Logout Invalid")
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
            // setLoginMessages(error.message)
            setIsLoadingLogout(false)
            setIsErrorLogout(true)
            return false
        }
        
    }

    return {
        logout, isErrorLogout, isLoadingLogout
    }
}

export default useLogout