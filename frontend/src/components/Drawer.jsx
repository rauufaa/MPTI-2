import { Link, Outlet } from "react-router-dom"
import PertaminaPNG from "../assets/PertaminaPNG.png"
import elpiji from "../assets/elpiji.png"
import Navbar from "./Navbar"

function Drawer({ drawerState }) {
    return (
        <div className="flex justify-center">
            <div className="drawer lg:drawer-open  lg:z-0 max-w-screen-2xl">
                {/* <Navbar drawerState={drawerState} /> */}
                <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                    {/* Page content here */}
                    {/* <label htmlFor="navbar-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    {/* <Outlet /> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="navbar-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={drawerState.handleDrawer}></label>

                    <ul className="menu p-4 w-80 min-h-screen bg-base-200 text-base-content pt-24 space-y-2">
                        {/* Sidebar content here */}
                        {/* <div className="lg:hidden flex justify-end">

                            <label htmlFor="navbar-drawer" className="lg:hidden flex">
                                <div htmlFor="navbar-drawer" role="button" className="btn btn-ghost btn-circle drawer-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </div>
                            </label>
                        </div>
                        <li className="lg:hidden">
                            <Link to="/" className="flex items-center text-gray-900 font-black">
                                <div className="grid grid-cols-2 items-center justify-items-center p-3">
                                    <img src={PertaminaPNG} alt="logo" className="h-6" />
                                    <img src={elpiji} alt="" className="h-10 border-l-2" />
                                </div>

                                PT. Egi Rahayu

                            </Link>
                        </li> */}
                        <li>
                            <button className="btn justify-start">
                                <svg className="h-9 w-9" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.5 7V17C3.5 18.1046 4.39543 19 5.5 19H19.5C20.6046 19 21.5 18.1046 21.5 17V7C21.5 5.89543 20.6046 5 19.5 5H5.5C4.39543 5 3.5 5.89543 3.5 7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15.5 10H18.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15.5 13H18.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> <path fillRule="evenodd" clipRule="evenodd" d="M11.5 10C11.5 11.1046 10.6046 12 9.5 12C8.39543 12 7.5 11.1046 7.5 10C7.5 8.89543 8.39543 8 9.5 8C10.0304 8 10.5391 8.21071 10.9142 8.58579C11.2893 8.96086 11.5 9.46957 11.5 10Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M5.5 16C8.283 12.863 11.552 13.849 13.5 16" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                                Cek Nik
                            </button>
                        </li>
                        <li>
                            <button className="btn justify-start">
                                <svg className="h-8 w-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M6 15L10 11L14 15L20 9M20 9V13M20 9H16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                Laporan Penjualan
                            </button>
                        </li>
                        <li>
                            <button className="btn justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-9" viewBox="0 0 32 32"><path fill="currentColor" d="M24 21v2h1.748A11.96 11.96 0 0 1 16 28C9.383 28 4 22.617 4 16H2c0 7.72 6.28 14 14 14c4.355 0 8.374-2.001 11-5.345V26h2v-5z" /><path fill="currentColor" d="m22.505 11.637l-5.989-3.5a1 1 0 0 0-1.008-.001l-6.011 3.5A1 1 0 0 0 9 12.5v7a1 1 0 0 0 .497.864l6.011 3.5A.96.96 0 0 0 16 24c.174 0 .36-.045.516-.137l5.989-3.5A1 1 0 0 0 23 19.5v-7a1 1 0 0 0-.495-.863m-6.494-1.48l4.007 2.343l-4.007 2.342l-4.023-2.342zM11 14.24l4 2.33v4.685l-4-2.33zm6 7.025v-4.683l4-2.338v4.683z" /><path fill="currentColor" d="M16 2A13.952 13.952 0 0 0 5 7.345V6H3v5h5V9H6.252A11.96 11.96 0 0 1 16 4c6.617 0 12 5.383 12 12h2c0-7.72-6.28-14-14-14" /></svg>
                                Button
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default Drawer