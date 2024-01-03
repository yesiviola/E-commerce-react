import { Button, Grid,  Typography } from '@mui/material';
import React from 'react';
import {useForm, FormProvider} from "react-hook-form";
import AddressInput from './AddressInput';
import {Link} from "react-router-dom";
import {useStateValue } from "../../StateProvider";
import {actionType} from "../../reducer";


const AddressForm = ({nextStep}) => {
  // eslint-disable-next-line
    const [{shippingData }, dispatch] = useStateValue();
    const methods = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            address1: "",
            email: "",
            city: "",
            zip: "",
        },
    });
    return (
        <>

        <Typography variant= 'h6' gutterBottom>
            Shipping Address
        </Typography> 
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data=> {
            dispatch({
                type: actionType.SET_SHIPPINGDATA,
                shippingData: data,
            });
            nextStep();
        })}>
            <Grid container spacing={3}>
                <AddressInput  required name="firstName"   label="First Name"/>
                <AddressInput  required name="lastName"   label="Last Name"/>
                <AddressInput  required name="address1"   label="Address"/>
                <AddressInput  required name="email"   label="Email"/>
                <AddressInput  required name="city"   label="City"/>
                <AddressInput  required name="zip"   label="Zip / Postal code"/>
            </Grid>
            <div style={{display: "flex", justifyContent:"space-between",marginTop: "1rem"}}> 
              <Button component={Link} to="/checkout">Back to the Checkout Page</Button>
               <Button type="submit" variant="contained" color="success">next</Button>
            </div>
     </form>
        </FormProvider>
       
            
        </>
    );
}

export default AddressForm;