import { useState } from 'react'
function LoginButton({isLoading}) {
    return (
        <button className="btn w-full">
            <span className={isLoading ? "loading loading-spinner" : ""}></span>
            {isLoading?"loading":"Log In"}
        </button>
    )
}

export default LoginButton