import CardProduct from "../components/Fragments/CardProduct";
import { useState, useEffect, useRef } from "react";
import { getAllProduct } from "../services/productService.jsx";
import TableCart from "../components/Fragments/TableCart.jsx";
import Navbar from "../components/Layouts/Navbar.jsx";

const ProductPage = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getAllProduct((error, data) => {
            if(!error){
                setProducts(data)
            }else{
                console.log(error);
            }
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className="flex justify-center mx-4">
                <div className="w-3/4 flex flex-wrap">
                {products.length > 0 && products.map((product, index) => (
                    <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} alt={product.alt} id={product.id}/>
                    <CardProduct.Body title={product.title}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer 
                        id={product.id}
                        price={product.price.toLocaleString()}  
                    />
                </CardProduct>
                ))}
                </div>
                <div className="w-1/4 py-7">
                    <h1 className="text-2xl font-bold mb-3">Cart</h1>
                    <TableCart products={products} />
                </div>
            </div>
        </>
    );
}

export default ProductPage;
