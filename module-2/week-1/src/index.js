const { response } = require('express');
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

    const nameQuery = request.query.name || "";

    const filteredPizzas = pizzas.filter(pizza => pizza.name.toLowerCase().includes(nameQuery.toLowerCase()));

    return response.json(filteredPizzas);
})

app.post('/pizzas', (request, response) => {
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


// Orders

let orders = [
    {
        id: uuidv4(),
        name: "Matheus",
        cpf: "10642496986",
        address: "Rua Bertoldo Simão De Oliveira",
        phone: "(48) 9 9152-5320",
        payment: "Cartão de crédito",
        obs: "Sem cebola",
        pizza: [
            {
                "id": "8cc9ac4f-651b-4ba3-96c7-fcccf2457f74",
                "name": "Pepperoni",
                "description": "Pizza de pepperoni",
                "price": "43,00",
                "ingredients": [
                    "Cheese",
                    "Special Sauce",
                    "Pepperoni"
                ]
            }
        ]
    }
]


app.get('/orders', (request, response) => {

    return response.status(200).json(orders);
})

app.post('/orders', (request, response) => {
    const {name, cpf, address, phone, payment, obs, pizza} = request.body;

    const newOrder = {
        id: uuidv4(),
        name,
        cpf,
        address,
        phone,
        payment,
        obs,
        pizza
    }

    orders.push(newOrder);

    return response.status(201).json(newOrder);
})

app.listen(3000, () => {
    console.log('Server started! 🚀')
});