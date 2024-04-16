import { Link } from "react-router-dom"
import ForgetPasswordForm from "./ForgetPasswordForm"
import elpiji from "../../assets/elpiji.png"
import PertaminaPNG from "../../assets/PertaminaPNG.png"
import CodeOTPForm from "./CodeOTPForm"
import { useContext, useEffect, useState } from "react"
// import useSendEmail from "../../hooks/useSendEmail"
import useForgetPasswordContext from "../../hooks/useForgetPasswordContext"
import ForgetPasswordContextProvider, { ACTION_TYPE_PASS, ForgetPasswordContext } from "../../context/ForgetPasswordContext"
import { useSendEmail } from "../../hooks/useSendEmail"
import ChangePasswordForm from "./ChangePasswordForm"


function ForgetPassword({title}) {
    const {action} = useContext(ForgetPasswordContext)

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
                    <div className="p-10 space-y-7">
                        {/* <div className="space-y-2">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Reset password akun
                            </h1>
                            <p>Masukkan email yang terdaftar</p>
                        </div> */}
                        {/* <Outlet /> */}
                        {action==ACTION_TYPE_PASS.EMAIL&&<ForgetPasswordForm />}
                        {action==ACTION_TYPE_PASS.CODE&&<CodeOTPForm/>}
                        {action==ACTION_TYPE_PASS.REPASS&&<ChangePasswordForm/>}
                        {/* <ChangePasswordForm/> */}
                        {/* {isSendEmailError&&() }
                        {!isSendEmailError&&(<CodeOTPForm />) } */}
                        
                        {/* {
                            <CodeOTPForm />
                        ) : (
                            <ForgetPasswordForm />
                        )

                        } */}


                    </div>

                </div>
            </div>
        </section>
    )
}

export default ForgetPassword