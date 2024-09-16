import { Link } from "react-router-dom";

const AuthLayout = (props) => {
    const { title, children, type } = props
    return (
        <div className="flex bg-white min-h-screen items-center justify-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="text-sm text-slate-500 mb-6">Welcome back again!</p>
                {children}
                {<Navigation type={type} />}
            </div>
        </div>
    );
}

const Navigation = ({ type }) => {
    if (type === "login") {
        return (
            <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        )
    } else if (type === "register") {
        return (
            <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        )
    }
}

export default AuthLayout