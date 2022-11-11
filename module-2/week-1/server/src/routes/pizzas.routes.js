import { Router } from 'express';
import { findMany, create, deletePizza, updatePizza } from '../controllers/pizza.controller.js';

const pizzasRoutes = Router();

pizzasRoutes.get('/pizzas', findMany);

pizzasRoutes.post('/pizzas', create);

pizzasRoutes.delete('/pizzas/:id', deletePizza);

pizzasRoutes.put('/pizzas/:id', updatePizza)

export default pizzasRoutes;