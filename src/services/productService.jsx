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

export const getProductById = (id, callback) => {
    axios.get("https://fakestoreapi.com/products/" + id)
    .then((response) => {
        if (callback) {
            console.log(response.data);
            callback(null, response.data);
        }
    })
    .catch((error) => {
        if (callback) {
            console.log(error);
            callback(error, null);
        }
    });
};