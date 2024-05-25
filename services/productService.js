const productRepository = require('../repositories/productRepository');


    const getAllProducts= async ()=> {
       const products =  await productRepository.findAll();
       return products;
    };


    const createProduct= async (productData) => {
         const newProduct = await productRepository.create(productData);
        return newProduct;
    };

    const getProductById = async (productId) => {
       const product = await productRepository.getById(productId);
        return product;
    
    };
    
    const updateProduct = async (productId, updatedProductData) => {
        try {
            const updatedProduct = await productRepository.updateProduct(productId, updatedProductData);
            return updatedProduct;
        } catch (error) {
            throw error;
        }
        };
    
     const deleteProduct = async (productId) => {
     try {
        const deletedProduct = await productRepository.deleteProduct(productId);
        return deletedProduct;
    } catch (error) {
        throw error;
    }
    };
    


    module.exports = {
        getAllProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct
    };