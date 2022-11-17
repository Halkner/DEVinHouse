import { Request, Response } from "express";
import { writeFileSync } from "fs";
import { v4 as uuidv4 } from "uuid";
import { getPizzaDB, PIZZAS_DB } from "../database/connection";
import { Pizza } from "../types/pizzas.type";

export const findAll = (request: Request, response: Response) => {

    const pizzas: Pizza[] = getPizzaDB();

    return response.status(200).json(pizzas);
}

export const create = (request: Request, response: Response) => {

    const {name, description, price, ingredients} = request.body;

    const pizzas: Pizza[] = getPizzaDB();

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

    writeFileSync(PIZZAS_DB, JSON.stringify([...pizzas, newPizza]));

    return response.status(201).json(newPizza);
}

export const deletePizza = (request: Request, response: Response) => {

    const pizzas: Pizza[] = getPizzaDB();
    
    const {id} = request.params;

    const selectedPizza = pizzas.find(pizza => pizza.id === id);

    if (!selectedPizza){
        return response.status(404).json({error: "Pizza não encontrada!"})
    }
    
    const filteredPizzas = pizzas.filter(pizza => pizza.id != id);

    writeFileSync(PIZZAS_DB, JSON.stringify(filteredPizzas));

    return response.status(200).json({success: 'Pizza removida!'});
}

export const updatePizza = (request: Request, response: Response) => {

    const {name, description, price, ingredients} = request.body;

    const pizzas: Pizza[] = getPizzaDB();

    const {id} = request.params;

    const selectedPizza = pizzas.find(pizza => pizza.id === id);

    if (!selectedPizza){
        return response.status(404).json({error: "Pizza não encontrada!"})
    }
    
    const updatedPizza = pizzas.map((pizza) => {
        if (pizza.id === id){
            pizza.name = name || pizza.name;
            pizza.description = description || pizza.description;
            pizza.price = price || pizza.price;
            pizza.ingredients = ingredients || pizza.ingredients;
        }
        return pizza
    });

    writeFileSync(PIZZAS_DB, JSON.stringify(updatedPizza));

    return response.status(200).json(updatedPizza);
}