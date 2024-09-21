import { useParams } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"
import { useEffect, useState } from "react"
import { getProductById } from "../services/productService"
import Button from "../components/Elements/Button"

const DetailProductPage = () => {
    useLogin()
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProductById(id, (error, data) => {
            if (!error) {
                setProduct(data)
            }else{
                console.log(error)
            }
        })
    }, [product])

    return (
        <div className="bg-blue-300">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-xl min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image Section */}
            <div className="flex justify-center items-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full max-w-sm rounded-lg"
                />
            </div>
            
            {/* Product Info Section */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800 text-justify">{product.title}</h1>
                <p className="text-gray-600 mt-2">{product.category}</p>
                
                <div className="flex items-center mt-4">
                    <span className="text-3xl font-semibold text-gray-900">${product.price}</span>
                </div>
                
                <div className="mt-4">
                    <p className="text-gray-600 text-justify">{product.description}</p>
                </div>
                
                {/* Rating Section */}
                <div className="mt-4">
                    <p className="text-gray-700 font-semibold">Rating: {product.rating?.rate} / 5</p>
                    <p className="text-gray-500">Based on {product.rating?.count} reviews</p>
                </div>
                
                <Button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Add to Cart
                </Button>
            </div>
        </div>
    </div>
    </div>
    )
}

export default DetailProductPage