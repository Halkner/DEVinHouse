import { Pizza } from "./pizzas.type";

export interface Order {
    id: string;
    name: string;
    cpf: string;
    address: string;
    phone: string;
    payment: string;
    obs: string;
    pizza: Pizza[];
    status: string;
  }