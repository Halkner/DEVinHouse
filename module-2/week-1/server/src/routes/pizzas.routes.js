import { Router } from 'express';
import { findMany, create } from '../controllers/pizza.controller.js';

const pizzasRoutes = Router();

pizzasRoutes.get('/pizzas', findMany);

pizzasRoutes.post('/pizzas', create);


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