import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth-state";
import { categoriesReducer } from "./categories-state";
import { ordersReducer } from "./orders-state";


const reducers = combineReducers({
    authState: authReducer,
    categoriesState: categoriesReducer,
    ordersState: ordersReducer,
});

const store = createStore(reducers);

export default store;