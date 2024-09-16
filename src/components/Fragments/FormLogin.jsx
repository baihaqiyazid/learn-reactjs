import InputForm from "../Elements/Input"
import Button from '../Elements/Button';

const FormLogin = () => {
    return (

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


    );
}

export default FormLogin