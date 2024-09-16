import InputForm from "../Elements/Input";
import Button from '../Elements/Button';
import { Link } from 'react-router-dom';

const FormLogin = () => {
    return (
        <div>
            <form action="">
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
                <Button className="bg-blue-600 w-full">Login</Button>
            </form>

            <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Signup 
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default FormLogin;
