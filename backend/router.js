import express from 'express';
import data from './data.js'

const router = express.Router();


router.get('/', (req, res) => {
    res.send('Server is ready');
})


router.get('/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id);
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'Product not found' })
    }

})

router.get('/products', (req, res) => {
    res.send(data.products);
})

export default router;