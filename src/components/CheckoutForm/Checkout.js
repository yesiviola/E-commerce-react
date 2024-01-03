/* eslint-disable no-unused-vars */
import {Box, Paper, Stepper, Step, StepLabel, Typography, Button  } from '@mui/material';
import {styles } from "./styles";
import { useState } from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Confirmation from './Confirmation';
import { useStateValue } from '../../StateProvider';



const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [{paymentMessage }, dispatch] = useStateValue();
  const steps = ["Shipping address", "Payment details"];

  const nextStep = () => setActiveStep((prevActivestep) => prevActivestep + 1);
  const backStep = () => setActiveStep((prevActivestep) => prevActivestep - 1);


  const Form = () => activeStep === 0 ? <AddressForm nextStep={ nextStep} /> : <PaymentForm backStep={backStep}nextStep={nextStep}/>

    return (
        <Box sx={{...styles.layout, display:'flex',justifyContent: 'center'}}>
          <Paper elevation={3} sx={{padding: 4, width: { xs:'100%'}}}>
            <Typography component="h1" variant="h3" align='center'>
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} sx={{ padding: 3}}>
            {steps.map((step) =>  (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
            </Stepper>
            {
              activeStep === steps.length ? (
              <Confirmation message={paymentMessage}/>
              ): (
              <Form step={activeStep}/>)
            }
          </Paper>
          
        </Box>
        
    );
}
export default Checkout;