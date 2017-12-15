// COMP 43D
//COMP 44C
import axios from 'axios';

const initialState = {
    user: {},
    cart: [],
    books: [
        {
            title: 'The Hobbit',
            author: 'JRR Tolkein'
        },
        {
            title: 'Harry Potter',
            author: 'JK Rowling'
        }
    ]
}

const GET_USER_INFO = 'GET_USER_INFO';
const ADD_TO_CART = 'ADD_TO_CART';

// COMP 43F

export function getUserInfo() {
    // COMP 44D
    const userData = axios.get('')
        .then(res => {
            return res.data
        })
    return {
        type: 'GET_USER_INFO',
        payload: userData
    }
}

export function addToCart(val) {
    return {
        type: ADD_TO_CART,
        payload: val
    }
}

// COMP 43E
export default function reducer(state = initialState, action) {
    switch (action.type) {
        // COMP 43K
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })

        case ADD_TO_CART:
            const newCart = state.cart.slice();
            newCart.push(action.payload);
            return Object.assign({}, state, {products: action.payload})

        default:
            return state;
    }
}