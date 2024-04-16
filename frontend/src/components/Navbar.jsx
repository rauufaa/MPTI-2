import { Link } from "react-router-dom"
import PertaminaPNG from "../assets/PertaminaPNG.png"
import elpiji from "../assets/elpiji.png"
import { useState } from "react"


function Navbar({drawerState}) {
    
    return (

        <div className="navbar bg-base-100 fixed top-0 z-20 backdrop-blur shadow-md">
            <div className="navbar-start">
                <div className="flex items-center">
                    <label htmlFor="navbar-drawer" className="lg:hidden" onClick={drawerState.handleDrawer}>
                        <div htmlFor="navbar-drawer" role="button" className="btn btn-ghost btn-circle drawer-button">
                            {drawerState.drawerOpen?
                            (<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>):
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

            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>

        </div>


    )
}

export default Navbar