import { request, response } from "express";
import { v4 as uuidv4 } from "uuid"

export const findMany = (request, response) => {
    const nameQuery = request.query.name || "";

    const filteredPizzas = pizzas.filter(pizza => pizza.name.toLowerCase().includes(nameQuery.toLowerCase()));

    return response.json(filteredPizzas);
}

export const create = (request, response) => {
    const {name, description, price, ingredients} = request.body;

    const pizzaExists = pizzas.find(pizza => pizza.name === name);

    if(pizzaExists){
        return response.status(401).json({error: 'Pizza já se encontra cadastrada!'});
    }

    const newPizza = {
        id: uuidv4(),
        name,
        description,
        price,
        ingredients
    }

    pizzas.push(newPizza);

    return response.status(201).json(newPizza);
}