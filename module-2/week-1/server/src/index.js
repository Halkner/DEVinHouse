import express from 'express';
import {v4 as uuidv4} from 'uuid';
import pizzasRoutes from './routes/pizzas.routes';
import ordersRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());
app.use(pizzasRoutes);
app.use(ordersRoutes);

app.listen(3000, () => {
    console.log('Server started! 🚀')
});

// Pizzas

// let pizzas = [
//     {
//         id: uuidv4(),
//         name: "Pepperoni",
//         description: "Pizza de pepperoni",
//         price: "43,00",
//         ingredients: [
//             "Cheese", 
//             "Special Sauce", 
//             "Pepperoni"
//         ]
//     },
//     {
//         id: uuidv4(),
//         name: "Chicken w/ cream cheese",
//         description: "Chicken Pizza",
//         price: "43,00",
//         ingredients: [
//             "Cheese", 
//             "Special Sauce", 
//             "Cream Cheese",
//             "Frango"
//         ]
//     },
//     {
//         id: uuidv4(),
//         name: "Bacon w/ barbecue",
//         description: "Bacon Pizza",
//         price: "45,00",
//         ingredients: [
//             "Cheese", 
//             "Special Sauce", 
//             "BBQ",
//             "Bacon"
//         ]
//     },
// ];

// // Orders

// let orders = [
//     {
//         id: uuidv4(),
//         name: "Matheus",
//         cpf: "10642496986",
//         address: "Rua Bertoldo Simão De Oliveira",
//         phone: "(48) 9 9152-5320",
//         payment: "Cartão de crédito",
//         obs: "Sem cebola",
//         pizza: [
//             {
//                 "id": "8cc9ac4f-651b-4ba3-96c7-fcccf2457f74",
//                 "name": "Pepperoni",
//                 "description": "Pizza de pepperoni",
//                 "price": "43,00",
//                 "ingredients": [
//                     "Cheese",
//                     "Special Sauce",
//                     "Pepperoni"
//                 ]
//             }
//         ]
//     }
// ]
