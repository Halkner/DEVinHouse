import { read, readFileSync, writeFileSync } from "fs";
import { request } from "http";
import { v4 as uuidv4 } from "uuid";

export const findMany = (request, response) => {

    const pizzasFile = readFileSync('./src/pizzas.json').toString();
    const pizzas = JSON.parse(pizzasFile);
    const nameQuery = request.query.name || "";

    const filteredPizzas = pizzas.filter(pizza => pizza.name.toLowerCase().includes(nameQuery.toLowerCase()));

    return response.json(filteredPizzas);
}

export const create = (request, response) => {
    const {name, description, price, ingredients} = request.body;

    const pizzasFile = readFileSync('./src/pizzas.json').toString();
    const pizzas = JSON.parse(pizzasFile);

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

    writeFileSync('./src/pizzas.json',JSON.stringify([...pizzas, newPizza]));

    return response.status(201).json(newPizza);
}

export const deletePizza = (request, response) => {

    const pizzasInFile = readFileSync('./src/pizzas.json').toString();
    const pizzas = JSON.parse(pizzasInFile);
    
    const {id} = request.params;

    const selectedPizza = pizzas.find(pizza => pizza.id === id);

    if (!selectedPizza){
        return response.status(404).json({error: "Pizza não encontrada!"})
    }
    
    const filteredPizzas = pizzas.filter(pizza => pizza.id != id);

    writeFileSync('./src/pizzas.json', JSON.stringify(filteredPizzas));

    return response.status(200).json({success: 'Pizza removida!'});
}

export const updatePizza = (request, response) => {

    const {name, description, price, ingredients} = request.body;

    const pizzasInFile = readFileSync('./src/pizzas.json').toString();
    const pizzas = JSON.parse(pizzasInFile);

    

}