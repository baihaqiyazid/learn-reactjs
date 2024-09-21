import axios from "axios"

export const getAllProduct = (callback) => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
        if (callback) {
            callback(null, response.data);
        }
    })
    .catch((error) => {
        if (callback) {
            callback(error, null);
        }
    });
};