const getAllProducts = (req, res) => {
    res.send("Fetching all products");
};

const createProduct = (req, res) => {
    res.send("Adding a new product");
};

const getProductById = (req, res) => {
    res.send(`Fetching product with ID: ${req.params.id}`);
};

module.exports = {
    getAllProducts,
    createProduct,
    getProductById
};
