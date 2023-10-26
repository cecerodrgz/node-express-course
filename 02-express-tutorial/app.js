const express = require('express');
const app = express();
const {products} = require('./data')

app.use(express.static('./public')); 

app.get('/api/v1/test', (req, res) => {
    res.json([{ message: 'It worked!' }]);
});

app.get('/api/v1/products', (req, res) => {
    res.json(products)
})

app.get('/api/v1/products/:productID', (req, res) => {
    const productID = parseInt(req.params.productID);
    const product = products.find((product) => product.id === productID);

    if (!product) {
        return res.status(404).send({message: 'Product not found'})
    } else {
        return res.json(product)
    }
});

app.get('/api/v1/query', (req, res) => {
    const {search, limit, price} = req.query;
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    } 
    if (price) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.price < Number(price); 
        });
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    } 
    res.status(200).json(sortedProducts)
})




app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
    console.log('Express Tutorial');
});
