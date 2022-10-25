import { Router } from 'express';
import { v4 as uuidv4} from 'uuid';

const ordersRoutes = Router();

ordersRoutes.get('/orders', (request, response) => {

    return response.status(200).json(orders);
})

ordersRoutes.post('/orders', (request, response) => {
    const {name, cpf, address, phone, payment, obs, pizza} = request.body;

    const newOrder = {
        id: uuidv4(),
        name,
        cpf,
        address,
        phone,
        payment,
        obs,
        pizza
    }

    orders.push(newOrder);

    return response.status(201).json(newOrder);
})


ordersRoutes.get('/orders/:id', (request, response) => {
    const {id} = request.params;

    const selectedOrder = orders.find(order => order.id === id);

    if (selectedOrder){
        return response.status(200).json(selectedOrder);
    }

    return response.status(404).json({error: "Pedido não encontrado!"})
})

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