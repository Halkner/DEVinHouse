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

// [
//     {
//         "id": uuidv4(),
//         "name": "Pepperoni",
//         "description": "Pizza de pepperoni",
//         "price": "43,00",
//         "ingredients": [
//             "Cheese", 
//             "Special Sauce", 
//             "Pepperoni"
//         ]
//     },
//     {
//         "id": uuidv4(),
//         "name": "Chicken w/ cream cheese",
//         "description": "Chicken Pizza",
//         "price": "43,00",
//         "ingredients": [
//             "Cheese", 
//             "Special Sauce", 
//             "Cream Cheese",
//             "Frango"
//         ]
//     },
//     {
//         "id": uuidv4(),
//         "name": "Bacon w/ barbecue",
//         "description": "Bacon Pizza",
//         "price": "45,00",
//         "ingredients": [
//             "Cheese", 
//             "Special Sauce", 
//             "BBQ",
//             "Bacon"
//         ]
//     },
// ]