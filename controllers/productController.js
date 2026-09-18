const productService = require('../services/productService');

const getAllProducts = (req, res) => {
    const products = productService.getAllProducts();
    res.send(products);
};

const createProduct = (req, res) => {
    const result = productService.createProduct();
    res.send(result);
};

const getProductById = (req, res) => {
    const product = productService.getProductById(req.params.id);
    res.send(product);
};

module.exports = {
    getAllProducts,
    createProduct,
    getProductById
};
