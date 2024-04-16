import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Drawer from '../../components/Drawer'

function Dashboard({ title }) {
    useEffect(() => {
        document.title = title
    }, [])
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawer = () => {
        setDrawerOpen(prev=>!prev);
    }
    return (
        <>
            <Navbar drawerState={{drawerOpen, handleDrawer}}/>
            <Drawer drawerState={{drawerOpen, handleDrawer}}/>
        </>
    )
}

export default Dashboard