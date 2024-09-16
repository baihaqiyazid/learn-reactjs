const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="flex justify-center items-center min-h-screen mx-2">
            <div className="max-w-xs bg-white rounded-lg shadow-xl overflow-hidden">
                {children}
            </div>
        </div>
    );
};

const Header = (props) => {
    const {image, alt} = props
    return (
        <img
            className="w-full h-48 object-cover"
            src={image}
            alt={alt}
        />
    );
};

const Body = (props) => {
    const {title, children} = props
    return (
        <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            <p className="text-gray-600 mt-2 text-justify">
               {children}
            </p>
        </div>
    );
};

const Footer = (props) => {
    const {price} = props
    return (
        <div className="p-4 flex items-center justify-between">
            <div className="text-lg font-semibold text-blue-600">
                Rp. {price}
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline">
                Add to Cart
            </button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;