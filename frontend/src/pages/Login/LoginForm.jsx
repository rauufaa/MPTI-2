
import { Form, Link, redirect } from 'react-router-dom'
import LoginButton from './LoginButton'
import { useEffect, useState } from 'react'
import { useLogin } from '../../hooks/useLogin.jsx';
import AlertComponent from '../../components/AlertComponent.jsx';
// import { handleLogin } from '../../utils/handleUser';



function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const { login, isLoading, isError } = useLogin();

    const handleUsernameChange = (input) => {
        input.target.value = input.target.value.replace(/[^a-z0-9]/g, '');
        setUsername(input.target.value);
    }



    const handlePasswordChange = (input) => {
        setPassword(input.target.value);
    }

    // useEffect(()=>{
    //     if(isError){
    //         console.log(isError, showAlert)
    //         showAlert?"":setShowAlert(true)
    //     }
    // }, [isError])

    const handleLogin = async (event) => {
        event.preventDefault();
        // setShowAlert(false)
        if (username !== "" && password !== "") await login(username, password);

        // const { data, error, isloading } = useLogin({ username, password })
        // setLoading(isloading);
        // setError(error);
        // if (!error) redirect("/dashboard");
    }

    return (
        <Form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
            {
                isError && (
                    <AlertComponent duration={5000} message={"Login invalid"} />
                )
            }
            <div>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input name="username" type="text" className="grow" placeholder="Username" pattern="[a-z0-9]+" title="Username harus berisi huruf dan angka tanpa spasi" onInput={handleUsernameChange} required />
                </label>
            </div>
            <div className="pb-2">
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input name="password" type="password" className="grow" placeholder="Password" onInput={handlePasswordChange} required />
                </label>
            </div>

            <p>
                Lupa password?
                <Link to={"/lupa-password"} className="pl-2 text-blue-400 hover:text-blue-600">
                    Reset
                </Link>
            </p>

            <LoginButton isLoading={isLoading} />
        </Form>
    )
}

export default LoginForm