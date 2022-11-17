import { readFileSync } from "fs";
import { Order } from "../types/orders.type";
import { Pizza } from "../types/pizzas.type";

export const PIZZAS_DB = './src/database/pizzas.json';

export const ORDERS_DB = './src/database/orders.json';

export function getPizzaDB() {
    const data = readFileSync(PIZZAS_DB).toString();
    const pizzas: Array<Pizza> = JSON.parse(data);
    return pizzas;
}

export function getOrdersDB(): Order[] {
    const data = readFileSync(ORDERS_DB).toString();
    const orders = JSON.parse(data);
    return orders;
}