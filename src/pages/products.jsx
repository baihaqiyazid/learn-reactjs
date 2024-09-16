import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products =[
    {
        image: "../../public/images/shoes.jpg",
        alt: "shoes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi facere repellendus itaque veniam reiciendis maxime architecto? Magnam corporis cum voluptate eos iusto, placeat fugit quasi autem vitae laborum quia!",
        title: "Flat Shoes",
        price: "100.000"
    },
    {
        image: "../../public/images/shoes.jpg",
        alt: "shoes",
        title: "Vans",
        price: "200.000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi facere repellendus itaque veniam reiciendis maxime architecto? Magnam corporis cum voluptate eos iusto, placeat fugit quasi autem vitae laborum quia!",
    },
    {
        image: "../../public/images/shoes.jpg",
        alt: "shoes",
        title: "Adidas",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi facere repellendus itaque veniam reiciendis maxime architecto? Magnam corporis cum voluptate eos iusto, placeat fugit quasi autem vitae laborum quia!",
        price: "300.000"
    },
    {
        image: "../../public/images/shoes.jpg",
        alt: "shoes",
        title: "Nike",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi facere repellendus itaque veniam reiciendis maxime architecto? Magnam corporis cum voluptate eos iusto, placeat fugit quasi autem vitae laborum quia!",
        price: "400.000"
    },
]

const ProductPage = () => {
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
            <div className="flex justify-center">
                {products.map((product, index) => (
                    <CardProduct key={index}>
                    <CardProduct.Header image={product.image} alt={product.alt} />
                    <CardProduct.Body title={product.title}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
                ))}
            </div>
        </>
    );
}

export default ProductPage;
