const express = require('express');
const {v4: uuidv4} = require('uuid');

const app = express();
app.use(express.json());

const pizzas = [
    {
        id: uuidv4(),
        name: "Pepperoni",
        description: "Pizza de pepperoni",
        price: "43,00",
        ingredients: [
            "Cheese", 
            "Special Sauce", 
            "Pepperoni"
        ]
    },
    {
        id: uuidv4(),
        name: "Chicken w/ cream cheese",
        description: "Chicken Pizza",
        price: "43,00",
        ingredients: [
            "Cheese", 
            "Special Sauce", 
            "Cream Cheese",
            "Frango"
        ]
    },
    {
        id: uuidv4(),
        name: "Bacon w/ barbecue",
        description: "Bacon Pizza",
        price: "45,00",
        ingredients: [
            "Cheese", 
            "Special Sauce", 
            "BBQ",
            "Bacon"
        ]
    },
];

app.get('/pizzas', (request, response) =>{
    return response.json(pizzas);
})

app.post('/pizzas', (request, response) => {
    const {name, description, price, ingredients} = request.body;

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

app.listen(3000, () => {
    console.log('Server started! 🚀')
});