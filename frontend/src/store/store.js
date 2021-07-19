import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { cartReducer } from '../reducer/cartReducers';
import { productDetailsReducer, productListReducer } from '../reducer/productReducers';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;