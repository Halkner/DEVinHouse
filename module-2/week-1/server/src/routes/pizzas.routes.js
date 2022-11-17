import { Router } from 'express';
import { create, deletePizza, updatePizza, findAll } from '../controllers/pizza.controller';

const pizzasRoutes = Router();

pizzasRoutes.get('/pizzas', findAll);

pizzasRoutes.post('/pizzas', create);

pizzasRoutes.delete('/pizzas/:id', deletePizza);

pizzasRoutes.put('/pizzas/:id', updatePizza)

export default pizzasRoutes;