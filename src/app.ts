import express from 'express';

import userController from './routes/user.route';
import categoryController from './routes/category.route';

const app = express();

app.use(express.json());
app.get('/test', (req, res) => res.send('Server works!'));
app.use('/users', userController);
app.use('/categories', categoryController);

export default app;
