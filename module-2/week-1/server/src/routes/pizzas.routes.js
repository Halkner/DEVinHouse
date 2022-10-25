import { Router } from 'express';

const pizzasRoutes = Router();

pizzasRoutes.get('/pizzas', (request, response) =>{

    const nameQuery = request.query.name || "";

    const filteredPizzas = pizzas.filter(pizza => pizza.name.toLowerCase().includes(nameQuery.toLowerCase()));

    return response.json(filteredPizzas);
})

pizzasRoutes.post('/pizzas', (request, response) => {
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
})


pizzasRoutes.delete('/pizzas/:id', (request, response) => {
    const {id} = request.params;

    const selectedPizza = pizzas.find(pizza => pizza.id === id);

    if (!selectedPizza){
        return response.status(404).json({error: "Pizza não encontrada!"})
    }
    
    const filteredPizzas = pizzas.filter(pizza => pizza.id != id);

    pizzas = [...filteredPizzas];

    return response.status(200).json({success: 'Pizza removida!'});

})

export default pizzasRoutes;