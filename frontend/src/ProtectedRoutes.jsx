import { Navigate, Route, redirect, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext"
import { useEffect, useTransition } from "react";
import { useSessionStorage } from "./hooks/useSessionStorage";



function ProtectedRoutes({ children }) {
    const { user, dispatch, statu } = useAuthContext();
    const navigate = useNavigate();
    console.log(user)
    const {getUserLogin} = useSessionStorage()

    // if(user===null){
    //     return navigate("/login", {replace:true})
    // }

    useEffect(()=>{
        // console.log(dispatch())
        // if(user===null){
        //     return navigate("/login", {replace:true})
        // }
        if(user===null){
            console.log(user)
            
            return navigate("/login", {replace:true})
        }
        // user===null ? navigate("/login") : children
        return ()=>{}
    }, [user])

    if(user===null){
        return <div>Loading</div>
    }

    console.log(user)

    // return (
    //     children
    // )
}

export default ProtectedRoutes