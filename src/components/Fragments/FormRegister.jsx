import InputForm from "../Elements/Input"
import Button from '../Elements/Button';

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
        </div>
    );
}

export default FormRegister