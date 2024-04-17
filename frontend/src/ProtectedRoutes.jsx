import { Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext"

function ProtectedRoutes({children}) {
    const {user} = useAuthContext();

    if(!user){
        console.log("asfasf")
        return(
            <Navigate to="/login"/>
        )
    }
    return (
        children
    )
}

export default ProtectedRoutes