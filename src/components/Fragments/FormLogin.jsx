import InputForm from "../Elements/Input";
import Button from '../Elements/Button';
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/authService";
import Loading from "../Elements/Loading";

const FormLogin = () => {

    const [loginFailed, setLoginFailed] = useState(null)
    const [loading, setLoading] = useState(false)

    const usernameRef = useRef()
    const handleLogin = (event) => {
        event.preventDefault()
        setLoading(true)
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        }
        login(data, (error, token) => {
            setLoading(false)
            if (error) {
                setLoginFailed(error)
            } else {
                localStorage.setItem('token', token)
                window.location.href = '/products'
            }
        })
    }

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    return (
        <div>
            <form onSubmit={handleLogin}>
                <InputForm
                    required
                    label="Username"
                    type="text"
                    placeholder="John Doe"
                    name="username"
                    ref={usernameRef}
                />
                <InputForm
                    label="Password"
                    type="password"
                    placeholder="********"
                    name="password"
                />
                <Button className="bg-blue-600 w-full" type="submit">
                    {loading && <Loading />}
                    {loading === false && "Login"} 
                    
                </Button>

                {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
            </form>
        </div>
    );
}

export default FormLogin;
