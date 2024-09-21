import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="flex justify-center items-center mx-2 my-7">
            <div className="max-w-xs bg-white rounded-lg shadow-xl overflow-hidden">
                {children}
            </div>
        </div>
    );
};

const Header = (props) => {
    const {image, alt, id} = props
    return (
        <Link to={`/products/${id}`}>
            <img
                className="w-full h-48 object-cover"
                src={image}
                alt={alt}
            />
        </Link>
    );
};

const Body = (props) => {
    const {title, children} = props
    return (
        <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">{title.length > 30 ? title.substring(0, 20) + "..." : title}</h3>
            <p className="text-gray-600 mt-2 text-justify">
               {children.length > 100 ? children.substring(0, 100) + "..." : children}
            </p>
        </div>
    );
};

const Footer = (props) => {
    const {price, id} = props
    const dispatch = useDispatch()

    return (
        <div className="p-4 flex items-center justify-between">
            <div className="text-lg font-semibold text-blue-600">
                $ {price}
            </div>
            <Button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline" 
                onClick={()=> dispatch(addToCart({id, qty: 1}))}>
                Add to Cart
            </Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;