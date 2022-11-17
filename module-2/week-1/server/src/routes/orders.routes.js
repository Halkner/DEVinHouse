import { Router } from 'express';
import { create, deleteOrder, findMany, findOne, updateOrder, updateStatus } from '../controllers/order.controller';

const ordersRoutes = Router();

ordersRoutes.get('/orders', findMany);

ordersRoutes.post('/orders', create);

ordersRoutes.get('/orders/:id', findOne);

ordersRoutes.delete('/orders/:id', deleteOrder);

ordersRoutes.put('/orders/:id', updateOrder);

ordersRoutes.patch('/orders/updateStatus/:id', updateStatus);

export default ordersRoutes;