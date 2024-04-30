import { Link, redirect, useLoaderData, useNavigate } from "react-router-dom"
import PertaminaPNG from "../assets/PertaminaPNG.png"
import elpiji from "../assets/elpiji.png"
import { useState } from "react"
import useLogout from "../hooks/useLogout"


function Navbar({ drawerState }) {

    const user = useLoaderData()
    const navigate = useNavigate();


    const { logout, isErrorLogout, isLoadingLogout } = useLogout()

    const handleLogout = async () => {
        const result = await logout();
        if (result) {
            return navigate("/login", { replace: true })
        }
    }

    return (

        <div className="bg-base-100 fixed top-0 z-20 w-full flex justify-center backdrop-blur shadow-md">
            <div className="navbar max-w-screen-2xl">
                <div className="navbar-start">
                    <div className="flex items-center">
                        <label htmlFor="navbar-drawer" className="lg:hidden" onClick={drawerState.handleDrawer}>
                            <div htmlFor="navbar-drawer" role="button" className="btn btn-ghost btn-circle drawer-button">
                                {drawerState.drawerOpen ?
                                    (<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>) :
                                    (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>)}


                            </div>
                        </label>
                        <Link to="/" className="flex items-center text-gray-900 font-black">
                            <div className="grid grid-cols-2 items-center justify-items-center p-3">
                                <img src={PertaminaPNG} alt="logo" className="h-6" />
                                <img src={elpiji} alt="" className="h-10 border-l-2" />
                            </div>

                            Pangkalan Elpiji Egi Rahayu

                        </Link>
                    </div>
                </div>

                <div className="navbar-end pe-3">
                    <div>

                    </div>
                    <p className="p-4 hidden md:inline-flex">Halo, <span className="font-medium ps-1"></span></p>
                    <button className="btn hidden md:inline-flex" onClick={handleLogout}>
                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12L16 12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        Logout
                    </button>
                    <div className="dropdown dropdown-end md:hidden">
                        <div tabIndex={0} role="button" className="btn m-1">Halo, <span className="font-medium"></span></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn" onClick={handleLogout}>
                                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12L16 12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    Logout
                                </button>
                            </li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>


                    {/* <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">Click</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><button onClick={handleLogout}><span className={isLoadingLogout ? "loading loading-spinner" : ""}></span>
                                {isLoadingLogout ? "loading" : "Logout"}</button></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div> */}
                </div>

            </div>

        </div>


    )
}

export default Navbar