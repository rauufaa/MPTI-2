import React from 'react'
import { useAuthContext } from './useAuthContext'

function useProtectedRoute() {
    const {user} = useAuthContext()
    return {
        user
    }
}

export default useProtectedRoute