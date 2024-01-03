import { Button, CircularProgress, Divider, Typography } from '@mui/material';
import Review from './Review';
import { actionType, getBasketTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
// eslint-disable-next-line no-unused-vars
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import accounting  from "accounting";
import axios  from "axios";
import { useState } from 'react';


const stripePromise = loadStripe("pk_test_51OU4NrC1AJ9nf3QWF7uos5beUoqxNn62qyvlStMpSrJyFlBzwU3MvmVToDGrvk4Cw4GLC3hPQq2jvtODWzvZIcHe00P3Y1A1ga");


const CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#e5424d",
            iconColor: "#fa755a",
        },
    },
};



const CheckoutForm = ({backStep, nextStep}) => {
    const [{basket}, dispatch] = useStateValue();
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(e) => {
        e.preventDefault();
       // eslint-disable-next-line no-unused-vars
       const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)   
        });
        setLoading(true);
        if (!error){
            const {id} = paymentMethod;
            try{
                const {data} = await axios.post("http://localhost:3001/api/checkout",
                 {
                    id,
                   amount: getBasketTotal(basket)* 100,
             });
             dispatch({
                   type: actionType.SET_PAYMENT_MESSAGE,
                   paymentMessage: data.message
             })
           let   cardElementInstance = elements.getElement(CardElement);
           if (cardElementInstance){
                cardElementInstance.clear();
           }
           if (data.message === "Successful Payment") {
                dispatch({
                    type: actionType.EMPTY_BASKET,
                    basket: [],
                });
              
           }
                nextStep();
            }catch(error){
                console.log(error)
                nextStep();
            }
            setLoading(false);
          }
        }
    
    const data = {};
    dispatch({type: 'ACTION_TYPE', payload: data});


    return (
        <form onSubmit={ handleSubmit}>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            <div style={{display: "flex", justifyContent:"space-between", marginTop: "1rem"}}>
                <Button variant='outlined' onClick={backStep} style={{backgroundColor: 'black', color: 'white'}}>Back</Button>
                <Button disabled={false} type='submit' variant="contained" color='secondary' style={{backgroundColor: 'green', color: 'white'}}>
                    {
                loading ? (<CircularProgress />) 
                :
                 (`Pay ${accounting.formatMoney(getBasketTotal(basket))}`)
                    }
                    </Button>
            </div>
        </form>
    );
};

const PaymentForm = ({ backStep, nextStep }) => {

    return (
        <>
            <Review />
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
                Payment method
            </Typography>
            <Elements stripe={stripePromise}>
                <CheckoutForm backStep={backStep} nextStep={nextStep} />
            </Elements>
        </>
    );
};

export default PaymentForm;