import { writeFileSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { getOrdersDB, ORDERS_DB } from '../database/connection';

export const findMany = (request, response) => {

    const orders = getOrdersDB();

    return response.json(orders);
}

export const create = (request, response) => {

    const {name, cpf, address, phone, payment, obs, pizza} = request.body;

    const newOrder = {
        id: uuidv4(),
        name,
        cpf,
        address,
        phone,
        payment,
        obs,
        pizza,
        status: 'Em produção',
    }

    const orders = getOrdersDB();

    writeFileSync(ORDERS_DB, JSON.stringify([...orders, newOrder]))

    return response.status(201).json(newOrder);
}

export const findOne = (request, response) => {
    const {id} = request.params;

    const orders = getOrdersDB();

    const selectedOrder = orders.find(order => order.id === id);

    if (selectedOrder){
        return response.status(200).json(selectedOrder);
    }

    return response.status(404).json({error: "Pedido não encontrado!"})
}

export const deleteOrder = (request, response) => {

    const orders = getOrdersDB();
    
    const {id} = request.params;

    const selectedOrder = orders.find(order => order.id === id);

    if (!selectedOrder){
        return response.status(404).json({error: "Pedido não encontrado!"})
    }
    
    const filteredOrders = orders.filter(order => order.id != id);

    writeFileSync(ORDERS_DB, JSON.stringify(filteredOrders));

    return response.status(200).json({success: 'Pedido removido!'});
}

export const updateOrder = (request, response) => {

    const {name, cpf, address, phone, payment, obs, pizza} = request.body;

    const orders = getOrdersDB();

    const {id} = request.params;

    const selectedOrder = orders.find(order => order.id === id);

    if (!selectedOrder){
        return response.status(404).json({error: "order não encontrada!"})
    }
    
    const updatedOrder = orders.map((order) => {
        if (order.id === id) {
          order.name = name || order.name;
          order.cpf = cpf || order.cpf;
          order.address = address || order.address;
          order.phone = phone || order.phone;
          order.payment = payment || order.payment;
          order.obs = obs || order.obs;
          order.pizza = pizza || order.pizza;
          order.status = order.status;
        }
        return order;
      });

    writeFileSync(ORDERS_DB, JSON.stringify(updatedOrder));

    return response.status(200).json(updatedOrder);
}

export const updateStatus = (request, response) => {

    const orders = getOrdersDB();

    const {id} = request.params;

    const orderIndex = orders.findIndex((order) => order.id === id);

    if (orderIndex === -1){
        return response.status(404).json({error: "Pedido não encontrado!"})
    }

    orders[orderIndex].status = 'A caminho...';

    writeFileSync(ORDERS_DB, JSON.stringify(orders));
    
    return response.status(200).json({success: 'Status do pedido atualizado!'});

}