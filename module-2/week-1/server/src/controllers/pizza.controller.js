import { writeFileSync } from "fs";
import { v4 as uuidv4 } from "uuid";
import { getPizzaDB, PIZZAS_DB } from "../database/connection";

export const findMany = (request, response) => {

    const pizzas = getPizzaDB();
    const nameQuery = request.query.name || "";

    const filteredPizzas = pizzas.filter(pizza => pizza.name.toLowerCase().includes(nameQuery.toLowerCase()));

    return response.json(filteredPizzas);
}

export const create = (request, response) => {

    const {name, description, price, ingredients} = request.body;

    const pizzas = getPizzaDB();

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

export const deletePizza = (request, response) => {

    const pizzas = getPizzaDB();
    
    const {id} = request.params;

    const selectedPizza = pizzas.find(pizza => pizza.id === id);

    if (!selectedPizza){
        return response.status(404).json({error: "Pizza não encontrada!"})
    }
    
    const filteredPizzas = pizzas.filter(pizza => pizza.id != id);

    writeFileSync(PIZZAS_DB, JSON.stringify(filteredPizzas));

    return response.status(200).json({success: 'Pizza removida!'});
}

export const updatePizza = (request, response) => {

    const {name, description, price, ingredients} = request.body;

    const pizzas = getPizzaDB();

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