import { useState } from "react";
import useSWR from "swr"
import { useAuthContext } from "./useAuthContext";

// import { handleLogin } from "../utils/handleUser.jsx";

// const handleLogin = ([url, data]) => fetch(url, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data)
// }).then((data) => data.json()).catch((error) => error.json())

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
function useLogin() {
    const [isError, setIsError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [loginMessages, setLoginMessages] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (username, password) => {
        setIsLoading(true)
        setIsError(false)
        // console.log(JSON.stringify({ username, password }))
        // const controller = new AbortController();
        // const id = setTimeout(()=>controller.abort(), 8000)

        // const response = await fetchTimeOut(8000, fetch("http://localhost:3000/login", {
        //     method: "POST",
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         username, password
        //     })
        // }).then(dat => dat.json()))

        try {
            // const response = await fetch("http://localhost:3000/login", {
            //     method: "POST",
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({
            //         username, password
            //     })
            // }).then(dat => dat.json())

            const response = await fetchTimeOut(8000, fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username, password
                })
            })).then(dat => dat.json())

            if (!response.ok) {
                console.log(response)
                setLoginMessages("Login Invalid")
                setIsLoading(false)
                setIsError(true)
                return false
            }
            if (response.ok) {
                // save the user to local storage
                // localStorage.setItem('user', JSON.stringify(response.data))
                sessionStorage.setItem("user", JSON.stringify(response.data))
                console.log(localStorage.getItem("user"))
                

                // update the auth context
                dispatch({ type: 'LOGIN', payload: response.data })

                // update loading state
                setIsLoading(false)
            }

            return true;

        } catch (error) {
            setLoginMessages(error.message)
            setIsLoading(false)
            setIsError(true)
            return false
        }
    }

    return { login, isLoading, isError, loginMessages}
}

export { useLogin }