import update from 'immutability-helper';
import {FILTER_PRODUCTS} from "../actions/actions";
import products from '../data/products';

// Define initial state object
// Make sure the state object contains the `products` array imported in this file
// The state will also require a property for the current state of filterable data
const initialState = {
    products: products,
    filter: 'all'
}

// Finish writing the reducer for the `FILTER_PRODUCTS` action
// Provide the reducer function declaration with the necessary parameters
// Give the `state` parameter a default value of `initialState`
const reducer = function(state = initialState, action) {

    // When a `FILTER_PRODUCTS` is provided, return a new state
    // Be sure not to mutate state
    // Use the `update` operator provided by `immutability-helper`
    // to update the the state property describing current state of filterable data
    // provided by the `action.payload`
console.log(FILTER_PRODUCTS);
console.log({FILTER_PRODUCTS});

    switch (action.type){
        case FILTER_PRODUCTS:
            return update(state, {
                filter: {
                    $set: action.payload.filterType
                }
            })
        default:
        return state;
    }


}

export default reducer;
