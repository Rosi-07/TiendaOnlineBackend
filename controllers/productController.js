const productService = require('../services/productService');


    const getAllProducts= async (req, res)=>  {
        try {
            const products = await productService.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

   

    const createProduct= async (req, res)=>  {
        try {
            const newProduct = await productService.createProduct(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    
    const getProductById = async (req, res) => {
        try {
            const productId = req.params.id;
            const product = await productService.getProductById(productId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    const updateProduct = async (req, res) => {
        try {
            const productId = req.params.id;
            const updatedProduct = await productService.updateProduct(productId, req.body);
            res.json(updatedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };


    const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const message = await productService.deleteProduct(productId);
        res.json( message );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
    
   

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
    };
