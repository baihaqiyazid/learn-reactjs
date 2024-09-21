import { useSelector } from "react-redux"
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button"

const Navbar = () => {
    const username = useLogin()
    const totalCart = useSelector((state) =>
        state.cart.data.reduce((total, item) => total + item.qty, 0)
    );
    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }

    return (   
        <nav className="bg-blue-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="text-white text-2xl font-bold">
                        <a href="#">Logo</a>
                    </div>

                    {/* Menu Items */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-white hover:text-gray-200">Home</a>
                        <a href="#" className="text-white hover:text-gray-200">About</a>
                        <a href="#" className="text-white hover:text-gray-200">Services</a>
                        <a href="#" className="text-white hover:text-gray-200">Contact</a>
                    </div>

                    {/* Button */}
                    <div className="flex items-center">
                       <button className="text-white text-lg mr-5" onClick={() => window.location.href = '/profile'}>{username}</button>    
                       <Button className="bg-black" onClick={handleLogout}>Logout</Button>
                       <div className=" bg-red-500 text-white p-3 text-sm font-bold h-5 w-5 flex items-center justify-center rounded-full ml-5">
                            {totalCart}
                       </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar