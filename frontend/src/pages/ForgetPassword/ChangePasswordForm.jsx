import { Form, redirect } from "react-router-dom"
import SubmitButton from "./SubmitButton"
import { useSendRepass } from "../../hooks/useSendRepass"
import { useEffect, useState } from "react"
import AlertComponent from "../../components/AlertComponent"



function ChangePasswordForm() {
    const [showAlert, setShowAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")
    const { sendRepass, isErrorSendRepass, isLoadingSendRepass } = useSendRepass()
    const handleForgetPassword = async (event) => {
        event.preventDefault()

        if (password==="" || repassword==="") {
            setMessageAlert("Input tidak boleh kosong")
            console.log(password, repassword)
            setShowAlert(true);
            return 
        }

        if (password !== repassword) {
            setMessageAlert("Password tidak sesuai")
            setShowAlert(true);
            return 
        }

        if ((password.length === repassword.length) < 6) {
            setMessageAlert("Panjang password tidak sesuai")
            setShowAlert(true);
            return 
        }

        await sendRepass(password, repassword)
        if (!isErrorSendRepass) {
            return redirect("/login")
        }

        setMessageAlert("Kesalahan")
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false)
        }, 5000)

        return ()=>clearTimeout(timer)
    }, [showAlert])

    function handlePasswordChange(input) {
        setPassword(input.target.value);
    }

    function handleRepasswordChange(input) {
        setRepassword(input.target.value);
    }

    return (
        <>
            <div className="space-y-2">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Ubah Password
                </h1>
                <p>Masukkan password baru</p>
            </div>
            <Form className="space-y-4 md:space-y-6" onSubmit={handleForgetPassword}>
                {
                    (isErrorSendRepass || showAlert) && (
                        <AlertComponent duration={5000} message={messageAlert} />
                    )
                }
                {/* {
                isError && (
                    <AlertComponent duration={5000} message={"Login invalid"} />
                )
            } */}
                <div>
                    {/* <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input name="email" type="email" className="grow" placeholder="Email" pattern=".+@gmail\.com" title="Hanya alamat email Gmail yang diperbolehkan" onInput={handleEmailChange} required />
                </label> */}
                    {/* <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Email" onInput={handleEmailChange} value={email} required />
                    <span className="">@gmail.com</span>
                </label> */}
                    <label className="input input-bordered flex items-center gap-2">
                        <input name="password" type="password" placeholder="Password" className="grow" title="Password minimal 6 karakter" min={6} max={100} onInput={handlePasswordChange} />
                    </label>

                </div>
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input name="repassword" type="password" placeholder="Konfirmasi password" className="grow" title="Konfirmasi password sesuai dengan masukkan sebelumnya" min={6} max={100} onInput={handleRepasswordChange} />
                    </label>
                </div>
                {/* <div className="pb-2">
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input name="password" type="password" className="grow" placeholder="Password" onInput={handlePasswordChange} required />
                </label>
            </div> */}
                {/* <p>
                    Ingat password?
                    <Link to={"/login"} className="pl-2 text-blue-400 hover:text-blue-600">
                        Login
                    </Link>
                </p> */}

                <SubmitButton text={"Kirim"} isLoading={isLoadingSendRepass} />

            </Form>
        </>
    )
}

export default ChangePasswordForm