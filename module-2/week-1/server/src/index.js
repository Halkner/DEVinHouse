import express from 'express';
import pizzasRoutes from './routes/pizzas.routes';
import ordersRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());
app.use(pizzasRoutes);
app.use(ordersRoutes);

app.listen(3000, () => {
    console.log('Server started! 🚀')
});