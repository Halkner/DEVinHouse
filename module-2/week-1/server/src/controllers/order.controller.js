import { v4 as uuidv4 } from 'uuid';

export const findMany = (request, response) => {
    return response.json([]);
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
        pizza
    }

    orders.push(newOrder);

    return response.status(201).json(newOrder);
}

export const findSome = (request, response) => {
    const {id} = request.params;

    const selectedOrder = orders.find(order => order.id === id);

    if (selectedOrder){
        return response.status(200).json(selectedOrder);
    }

    return response.status(404).json({error: "Pedido não encontrado!"})
}