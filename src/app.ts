import express from 'express';

import userController from './routes/user.route';
import categoryController from './routes/category.route';
import productController from './routes/product.route';

const app = express();

app.use(express.json());
app.get('/test', (req, res) => res.send('Server works!'));
app.use('/users', userController);
app.use('/categories', categoryController);
app.use('/products', productController);

export default app;
