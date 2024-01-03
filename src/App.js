import React, {createContext} from 'react';
import {  useReducer,  useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Product from "./components/Product";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import {ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import CheckoutPage from "./components/CheckoutPage";
import CheckoutCard from "./components/CheckoutCard";
import products from './product-data';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import { auth } from './firebase';
import {useStateValue } from "./StateProvider";
import { reducer as cartReducer } from './reducer';
import {initialState as initialCartState} from './reducer';
import Checkout from './components/CheckoutForm/Checkout';


export const CartContext = createContext();


const theme = createTheme ({
  palette: {
    primary: {
      main: '#2a2a2a',
    },
    secondary: {
      main: '#fffff0',
    },
    navbar: {
      main: '#000000',
    }
  },
});

function App() {
  // eslint-disable-next-line no-unused-vars
const [{user}, dispatchUser] = useStateValue();
// eslint-disable-next-line
const [ cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

useEffect(() =>{
  auth.onAuthStateChanged((authUser) => {
    console.log("El usuario es: ", authUser);
    if (authUser) {
      dispatchUser({
        type: 'SET_USER',
        user: authUser,
      })
    } else {
      dispatchUser({
        type: 'SET_USER',
        user: null,
      })
    }
  })
 }, [dispatchUser])

  const  findProductById = (id) => {
    return products.find(product => product.id === id);
  };
  
  const addToCart = (product, quantity) => {
    cartDispatch({ type: 'ADD_TO_BASKET', item: {...product,quantity}});
  };
  const removeFromCart = (productId) => {
    cartDispatch({type: 'REMOVE_FROM_BASKET', id: productId});
  };

  const handleSignIn = (user) => {
    dispatchUser({
      type: 'SET_USER',
      user: user,
    });
  };



  return (
    <CartContext.Provider value={{ state: cartState, handleSignIn, dispatch: cartDispatch}}>
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Navbar cart={cartState.basket} removeFromCart={removeFromCart} />
        <CheckoutCard />
        <Routes>
          
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<CheckoutPage cart={cartState.basket} removeFromCart={removeFromCart} />} />
          <Route path="/checkout/payment" element={<Checkout />} />
          <Route path="/products" element={<Products addToCart={addToCart}/>} />
          <Route path="/product/:id" element={<Product product={findProductById(useParams().id)} addToCart={addToCart} />} />
          <Route path="/"element={<Products addToCart={addToCart}/>} />
         
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
    </CartContext.Provider>
  );
}

export default App;
