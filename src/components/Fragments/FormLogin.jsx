import InputForm from "../Elements/Input";
import Button from '../Elements/Button';
import { useEffect, useRef } from "react";



const FormLogin = () => {
    const emailRef = useRef()
    const handleLogin = (event) => {
        event.preventDefault()
        localStorage.setItem('email', event.target.email.value)
        localStorage.setItem('password', event.target.password.value)
        window.location.href = '/products'
    }

    useEffect(() => {
        emailRef.current.focus()
    },[])

    return (
        <div>
            <form onSubmit={handleLogin}>
                <InputForm
                    label="Email"
                    type="email"
                    placeholder="enter your email"
                    name="email"
                    ref = {emailRef}
                />
                <InputForm
                    label="Password"
                    type="password"
                    placeholder="********"
                    name="password"
                />
                <Button className="bg-blue-600 w-full" type="submit">Login</Button>
            </form>
        </div>
    );
}

export default FormLogin;
