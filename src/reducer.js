import { createContext, useReducer } from 'react';


export const initialState = {
    basket:[],
    user: null,
};

export const actionType = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
    INCREMENT_QUANTITY: "INCREMENT_QUANTITY",
    SET_USER: "SET_USER",
    SIGN_OUT: "SIGN_OUT",
};

export const CartContext = createContext();

 export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };


        case "INCREMENT_QUANTITY":
            const indexInc = state.basket.findIndex((basketItem => basketItem.id === action.id));
            let newBasketInc = [...state.basket];

            if (indexInc >= 0) {
                newBasketInc[indexInc].quantity += 1;
            } else {
                console.log("cant increment quantity")
            }
            return {
                ...state,
                basket: newBasketInc,
            }

        
        case actionType.REMOVE_FROM_BASKET:
            const index = state.basket.findIndex((basketItem => basketItem.id ===action.id))
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.log("cant remove product")
            }

            return {
                ...state,
                basket: newBasket,
            };
            case "SET_USER":
                return {
                    ...state,
                    user: action.user,
                };
            case "SIGN_OUT":
                return {
                    ...state,
                    user: null,
                };
            case "EMPTY_CART":
                return {
                    ...state,
                    basket: [],
                };    
        default:
            return state;
    }
}
export function CartProvider({children}) {
    const [state, dispatch ] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default reducer;

