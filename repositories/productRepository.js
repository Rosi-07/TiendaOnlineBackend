const Product = require('../models/Product');

const findAll = async () => {
    try {
         return await Product.find();
    } catch (error) {
        throw error;
    }
};


const create = async (productData) => {
    try{ 
        const product = new Product(productData);
        return await product.save();
     } catch (error) {
    throw error;
    }
};


const getById = async (productId) => {
    try {
        return await Product.findById(productId);
    } catch (error) {
        throw error;
    }
};

const updateProduct = async (productId, updatedProductData) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate
        (productId, updatedProductData, { new: true });
        return updatedProduct;
    } catch (error) {
        throw error;
    }
};

const deleteProduct = async (productId) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            throw new Error("Product not found");
        }
        return { message: "Product deleted successfully" };
    } catch (error) {
        throw error;
    }
};




module.exports = {
    findAll,
    getById,
    create,
    updateProduct,
    deleteProduct

};
