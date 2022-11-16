import { readFileSync } from "fs";

export const PIZZAS_DB = './src/database/pizzas.json';

export const ORDERS_DB = './src/database/orders.json';

export function getPizzaDB() {
    const data = readFileSync(PIZZAS_DB).toString();
    const pizzas = JSON.parse(data);
    return pizzas;
}

export function getOrdersDB() {
    const data = readFileSync(ORDERS_DB).toString();
    const orders = JSON.parse(data);
    return orders;
}