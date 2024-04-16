import { useContext } from "react"
import { ForgetPasswordContext } from "../context/ForgetPasswordContext";

function useForgetPasswordContext() {
    const context = useContext(ForgetPasswordContext)


    if (!context) {
        throw Error("useForgetPasswordContext must be used inside an ForgetPasswordContextProvider");
    }
    return context;
}

export default useForgetPasswordContext