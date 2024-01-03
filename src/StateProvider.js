import { useContext, useReducer} from "react";
import {CartContext } from './reducer';


export const StateProvider = ({ reducer, initialState, children }) => (
    <CartContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </CartContext.Provider>
);
export const useStateValue = () => useContext(CartContext)