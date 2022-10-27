import { Router } from 'express';
import { create, findMany, findSome } from '../controllers/order.controller.js';

const ordersRoutes = Router();

ordersRoutes.get('/orders', findMany);
ordersRoutes.post('/orders', create);
ordersRoutes.get('/orders/:id', findSome);

ordersRoutes.delete('/orders/:id', (request, response) => {
    const {id} = request.params;

    const selectedOrder = orders.find(order => order.id === id);

    if (!selectedOrder){
        return response.status(404).json({error: "Pedido não encontrado!"})
    }
    
    const filteredOrders = orders.filter(order => order.id != id);

    orders = [...filteredOrders];

    return response.status(200).json({success: 'Pedido removido!'});

})

export default ordersRoutes;