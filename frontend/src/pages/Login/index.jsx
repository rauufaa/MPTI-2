import { Link, Outlet } from "react-router-dom"
import Pertamina from "../../assets/Pertamina.svg"
import PertaminaPNG from "../../assets/PertaminaPNG.png"
import LoginForm from "./LoginForm"
import elpiji from "../../assets/elpiji.png"
import { useEffect } from "react"


// export async function loginAction({ request }) {
//     const formData = await request.formData();
//     const updates = Object.fromEntries(formData);
    
//     // await updateContact(updates);
//     return 1;
// }

function Login({title}) {
    useEffect(()=>{
        document.title = title
    }, [])
    return (

        <section className="bg-gray-50">
            <div className="grid justify-items-center items-center px-6 py-8 mx-auto h-screen max-w-5xl lg:py-0 md:grid-cols-3">
                <Link to="/" className="flex flex-col items-center text-2xl text-gray-900 font-black">
                    <div className="grid grid-cols-2 items-center justify-items-center p-3">
                        <img src={PertaminaPNG} alt="logo" className="h-28" />
                        <img src={elpiji} alt="" className="h-32 border-l-2" />
                    </div>

                    Pangkalan Elpiji Egi Rahayu

                </Link>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 md:col-span-2">
                    <div className="p-10 space-y-9">
                        
                        <div className="space-y-2">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Masuk
                            </h1>
                            <p>Masukkan username yang terdaftar</p>
                        </div>
                        {/* <Outlet /> */}
                        <LoginForm />

                    </div>

                </div>
            </div>
        </section>

    )
}

export default Login