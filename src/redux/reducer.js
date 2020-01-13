import { CUSTOMERS } from '../data/customers.js';
import { FEATURES } from '../data/features.js';
import { INVENTORY } from '../data/inventory.js';
import { ORDERS } from '../data/orders.js';
import { PRODUCTS } from '../data/products.js';
import { USERS } from '../data/users.js';

export const initialState = {
    customers: CUSTOMERS,
    features: FEATURES,
    inventory: INVENTORY,
    orders: ORDERS,
    products: PRODUCTS,
    users: USERS,
}

export const Reducer = (state = initialState, action) => {
    return state;
};