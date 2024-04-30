import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'
import { useAuthContext } from '../../hooks/useAuthContext'
import { redirect, useNavigate } from 'react-router-dom'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import useLogout from '../../hooks/useLogout'
import Toast from '../../components/Toast'

export const loaderDashboard = () => {
    const { getUserLogin } = useSessionStorage()

    if (!getUserLogin()) {
        return redirect("/login")
    }
    return getUserLogin()
}


function Dashboard({ title }) {
    const { isErrorLogout, isLoadingLogout } = useLogout();
    const {user} = useAuthContext();
    const navigate = useNavigate();
    
    useEffect(() => {
        document.title = title
        // if(!user){
        //     return navigate("/login")
        // }
    }, [])

    
    // console.log(isErrorLogout, isLoadingLogout)

    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawer = () => {
        setDrawerOpen(prev => !prev);
    }
    return (
        <>
            <Navbar drawerState={{ drawerOpen, handleDrawer }} />
            <Drawer drawerState={{ drawerOpen, handleDrawer }} />
            {isErrorLogout&&(
                <Toast duration={5000} message={"Gagal logout"} type={"error"} />
            )}
            {isLoadingLogout&&(
                <Toast duration={10000} message={"Proses logout..."} type={"info"} />
            )}

        </>
    )
}

export default Dashboard