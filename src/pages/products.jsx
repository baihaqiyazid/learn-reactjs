import CardProduct from "../components/Fragments/CardProduct";

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
    return (
        <div className="flex justify-center">
            {products.map((product, index) => (
                <CardProduct>
                <CardProduct.Header image={product.image} alt={product.alt} />
                <CardProduct.Body title={product.title}>
                    {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} />
            </CardProduct>
            ))}
        </div>
    );
}

export default ProductPage;
