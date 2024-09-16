import InputForm from "../Elements/Input"
import Button from '../Elements/Button';
import { Link } from 'react-router-dom';

const FormRegister = () => {
    return (
        <div>
            <form action="">
                <InputForm 
                    label="Name"
                    type="name"
                    placeholder="enter your name"
                    name="name"
                />
                <InputForm 
                    label="Email"
                    type="email"
                    placeholder="enter your email"
                    name="email"
                />
                <InputForm 
                    label="Password"
                    type="password"
                    placeholder="********"
                    name="password"
                />
                <InputForm 
                    label="Confirm Password"
                    type="password"
                    placeholder="********"
                    name="confirmPassword"
                />
                <Button className="bg-blue-600 w-full">Register</Button>
            </form>
            <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                    Have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login 
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default FormRegister