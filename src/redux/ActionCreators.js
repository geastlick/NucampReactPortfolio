import * as ActionTypes from './ActionTypes';

export const fetchCustomers = () => dispatch => {
    dispatch(customersLoading());

    return fetch('/api/customers')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`); error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(customers => dispatch(addCustomers(customers)))
        .catch(error => dispatch(customersFailed(error.message)));
};

export const customersLoading = () => ({
    type: ActionTypes.CUSTOMERS_LOADING
});

export const customersFailed = errMess => ({
    type: ActionTypes.CUSTOMERS_FAILED,
    payload: errMess
});

export const addCustomers = customers => ({
    type: ActionTypes.ADD_CUSTOMERS,
    payload: customers
});

export const fetchInventory = () => dispatch => {
    dispatch(inventoryLoading());

    return fetch('/api/inventory')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`); error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(inventory => dispatch(addInventory(inventory)))
        .catch(error => dispatch(inventoryFailed(error.message)));
};

export const inventoryLoading = () => ({
    type: ActionTypes.INVENTORY_LOADING
});

export const inventoryFailed = errMess => ({
    type: ActionTypes.INVENTORY_FAILED,
    payload: errMess
});

export const addInventory = inventory => ({
    type: ActionTypes.ADD_INVENTORY,
    payload: inventory
});

export const fetchOrders = () => dispatch => {
    dispatch(ordersLoading());

    return fetch('/api/orders')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`); error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(orders => dispatch(addOrders(orders)))
        .catch(error => dispatch(ordersFailed(error.message)));
};

export const ordersLoading = () => ({
    type: ActionTypes.ORDERS_LOADING
});

export const ordersFailed = errMess => ({
    type: ActionTypes.ORDERS_FAILED,
    payload: errMess
});

export const addOrders = orders => ({
    type: ActionTypes.ADD_ORDERS,
    payload: orders
});

export const fetchProducts = () => dispatch => {
    dispatch(productsLoading());

    return fetch('/api/products')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`); error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(products => dispatch(addProducts(products)))
        .catch(error => dispatch(productsFailed(error.message)));
};

export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING
});

export const productsFailed = errMess => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errMess
});

export const addProducts = products => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});

export const fetchUsers = () => dispatch => {
    dispatch(usersLoading());

    return fetch('/api/users')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`); error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(users => dispatch(addUsers(users)))
        .catch(error => dispatch(usersFailed(error.message)));
};

export const usersLoading = () => ({
    type: ActionTypes.USERS_LOADING
});

export const usersFailed = errMess => ({
    type: ActionTypes.USERS_FAILED,
    payload: errMess
});

export const addUsers = users => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});
