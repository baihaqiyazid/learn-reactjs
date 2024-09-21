import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { useState, useEffect, useRef } from "react";
import { getAllProduct } from "../services/productService.jsx";
import { getUsername } from "../services/authService.jsx";
import { useLogin } from "../hooks/useLogin.jsx";

const ProductPage = () => {

    const [carts, setCart] = useState([])
    const [total, setTotalPrice] = useState(0)
    const [products, setProducts] = useState([])
    const totalElement = useRef()
    const username = useLogin()

    useEffect(() => {
        getAllProduct((error, data) => {
            if(!error){
                setProducts(data)
            }else{
                console.log(error);
            }
        })

        setCart(JSON.parse(localStorage.getItem('carts')) || [])
    }, [])


    useEffect(()=> {
        if(products.length > 0 && carts.length > 0){
            const sum = carts.reduce((total, item) => {
                const product = products.find(product => product.id === item.id)
                return total + product.price * item.qty
            }, 0)
            setTotalPrice(sum)
            localStorage.setItem('carts', JSON.stringify(carts))
        }

        if(carts.length > 0){
            totalElement.current.style.display = "table-row"
        }else {
            totalElement.current.style.display = "none"
        }

    }, [carts, products])

    const handleAddToCart = (id) => {
       if (products.length > 0 && carts.find((item) => item.id === id)) {
            setCart(
                carts.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            qty: item.qty + 1
                        }
                    }
                    return item
                })
            )
       }else{
        setCart([...carts, {id, qty: 1}])
       }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }
    return (
        <>
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
                    </div>
                </div>
            </div>
        </nav>
            <div className="flex justify-center mx-4">
                <div className="w-3/4 flex flex-wrap">
                {products.length > 0 && products.map((product, index) => (
                    <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} alt={product.alt} />
                    <CardProduct.Body title={product.title}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer 
                        id={product.id}
                        price={product.price.toLocaleString()}  
                        handleAddToCart={handleAddToCart} 
                    />
                </CardProduct>
                ))}
                </div>
                <div className="w-1/4 py-7">
                    <h1 className="text-2xl font-bold">Cart</h1>
                   <table>
                    <thead>
                        <tr>
                            <th className="border px-2 py-2 font-medium">Product</th>
                            <th className="border px-2 py-2 font-medium">Price</th>
                            <th className="border px-2 py-2 font-medium">Qty</th>
                            <th className="border px-2 py-2 font-medium">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           products.length > 0 && carts.map((cart) => {
                                const product = products.find(product => product.id === cart.id)
                                return (
                                    <tr key={cart.id}>
                                        <td className="border px-4 py-2">{product.title.substring(0, 30)}</td>
                                        <td className="border px-4 py-2">$ {product.price.toLocaleString()}</td>
                                        <td className="border px-4 py-2">{cart.qty}</td>
                                        <td className="border px-4 py-2">{(product.price * cart.qty).toLocaleString()}</td>
                                    </tr>
                                )

                            })
                        }
                        <tr ref={totalElement}>
                            <td colSpan={3} className="border px-4 py-2 font-bold">Total</td>
                            <td className="border px-4 py-2 font-bold">{total.toLocaleString()}</td>
                        </tr>
                    </tbody>
                   </table>
                </div>
            </div>
        </>
    );
}

export default ProductPage;
