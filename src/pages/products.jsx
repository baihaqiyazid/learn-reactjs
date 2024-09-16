import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
    return (
        <div className="flex justify-center">
            <CardProduct>
                <CardProduct.Header image="../../public/images/shoes.jpg" alt="shoes" />
                <CardProduct.Body title="Flat Shoes">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perspiciatis, ab inventore dolores dolor autem soluta eligendi. Dolore ducimus, eaque consectetur, a earum eum perspiciatis id amet exercitationem blanditiis aliquam!
                </CardProduct.Body>
                <CardProduct.Footer price="100.000" />
            </CardProduct>
            <CardProduct>
                {/* <CardProduct.Header image="../../public/images/shoes.jpg" alt="shoes" /> */}
                <CardProduct.Body title="Flat Shoes">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perspiciatis, ab inventore dolores dolor autem soluta eligendi. Dolore ducimus, eaque consectetur, a earum eum perspiciatis id amet exercitationem blanditiis aliquam!
                </CardProduct.Body>
                <CardProduct.Footer price="50.000" />
            </CardProduct>
        </div>
    );
}

export default ProductPage;
