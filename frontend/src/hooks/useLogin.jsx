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


function useLogin() {
    const [isError, setIsError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    
    const login = async (username, password) => {
        setIsLoading(true)
        setIsError(false)
        console.log(JSON.stringify({ username, password }))

        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username, password
            })
        }).then(dat=>dat.json())  
        

        if (!response.ok) {
            setIsLoading(false)
            setIsError(true)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({ type: 'LOGIN', payload: response })

            // update loading state
            setIsLoading(false)
        }
    }

    return { login, isLoading, isError }
}

export { useLogin }