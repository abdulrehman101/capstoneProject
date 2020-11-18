// const product = require('../models/product');

module.exports = function (app) {

    var Products = require('../controllers/productController')

    app.get('/api/products', Products.findAll);

    app.get('/api/productbyid/:id', Products.findProductById);

    app.get('/api/products/:productName', Products.findByName)

    app.get('/api/products/company/:companyId', Products.findByCompanyId)

    app.post('/api/products', Products.addProduct)

    app.delete('/api/products/:id', Products.removeById)

    app.put('/api/products/:id', Products.updateById)
}