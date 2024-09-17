import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { useState, useEffect } from "react";

const products =[
    {
        id: 1,
        image: "../../public/images/shoes.jpg",
        alt: "shoes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi facere repellendus itaque veniam reiciendis maxime architecto? Magnam corporis cum voluptate eos iusto, placeat fugit quasi autem vitae laborum quia!",
        title: "Flat Shoes",
        price: 100000
    },
    {
        id: 2,
        image: "../../public/images/shoes.jpg",
        alt: "shoes",
        title: "Vans",
        price: 200000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi facere repellendus itaque veniam reiciendis maxime architecto? Magnam corporis cum voluptate eos iusto, placeat fugit quasi autem vitae laborum quia!",
    },
    {
        id: 3,
        image: "../../public/images/shoes.jpg",
        alt: "shoes",
        title: "Adidas",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi facere repellendus itaque veniam reiciendis maxime architecto? Magnam corporis cum voluptate eos iusto, placeat fugit quasi autem vitae laborum quia!",
        price: 300000
    },
    {
        id: 4,
        image: "../../public/images/shoes.jpg",
        alt: "shoes",
        title: "Nike",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi facere repellendus itaque veniam reiciendis maxime architecto? Magnam corporis cum voluptate eos iusto, placeat fugit quasi autem vitae laborum quia!",
        price: 400000
    },
]

const ProductPage = () => {

    const [carts, setCart] = useState([])

    const [total, setTotalPrice] = useState(0)
    
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('carts')) || [])
    }, [])

    useEffect(()=> {
        if(carts.length > 0){
            const sum = carts.reduce((total, item) => {
                const product = products.find(product => product.id === item.id)
                return total + product.price * item.qty
            }, 0)
            setTotalPrice(sum)
            localStorage.setItem('carts', JSON.stringify(carts))
        }

    }, [carts])

    const handleAddToCart = (id) => {
       if (carts.find((item) => item.id === id)) {
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
        console.log("Logout");
        
        localStorage.removeItem('email')
        localStorage.removeItem('password')
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
                    <div className="hidden md:block">
                       <Button className="bg-black" onClick={handleLogout}>Logout</Button>
                    </div>
                </div>
            </div>
        </nav>
            <div className="flex justify-center mx-4">
                <div className="w-3/4 flex flex-wrap">
                {products.map((product, index) => (
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
                            <th className="border px-2 py-2 font-medium">Quantity</th>
                            <th className="border px-2 py-2 font-medium">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map((cart) => {
                                const product = products.find(product => product.id === cart.id)
                                return (
                                    <tr key={cart.id}>
                                        <td className="border px-4 py-2">{product.title}</td>
                                        <td className="border px-4 py-2">{product.price.toLocaleString()}</td>
                                        <td className="border px-4 py-2">{cart.qty}</td>
                                        <td className="border px-4 py-2">{(product.price * cart.qty).toLocaleString()}</td>
                                    </tr>
                                )

                            })
                        }
                        <tr>
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
