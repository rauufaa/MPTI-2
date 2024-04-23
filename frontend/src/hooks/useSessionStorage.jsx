import React from 'react'

function useSessionStorage() {
    const setUserLogin = (user) => {
        return sessionStorage.setItem("user", JSON.stringify(user))
    }
    const getUserLogin = () => {
        const user = JSON.parse(sessionStorage.getItem("user"))
        if(!user){
            return false
        }
        if(!('token' in user)){
            return false
        }

        if(!('nama' in user)){
            return false
        }

        if(!('username' in user)){
            return false
        }

        return JSON.parse(sessionStorage.getItem("user")) 
    }

    return {
        setUserLogin,
        getUserLogin
    }
}

export {useSessionStorage}