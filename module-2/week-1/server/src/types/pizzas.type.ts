export interface Pizza {
    id: string;
    name: string;
    description: string;
    price: number;
    ingredients: string[];
}

export interface CreatePizza {
    name: string;
    description: string;
    price: number;
    ingredients: string[];
}

export interface UpdatePizza {
    name: string;
    description: string;
    price: number;
    ingredients: string[];
}