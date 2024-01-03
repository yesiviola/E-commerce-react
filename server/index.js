const express = require("express");
// eslint-disable-next-line no-unused-vars
const stripeModule = require("stripe");
const cors = require("cors");

const  stripe =  stripeModule("sk_test_51OU4NrC1AJ9nf3QWrwCJ5mrtN1kpCuW9PqXpktz2SNIXMFj99djBwXv2P48EsUlWpqzt6PKw3PtUAtAZ1kZSOdwl00dmudISeI")


const app = express();

//middleware
app.use(cors());
app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());

app.post('/api/checkout', async (req, res) => {
    console.log(req.body);
    const {id, amount } = req.body;
    let response = {
        message: "payment failed",
        success: false
    };
     try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Basket of products",
            payment_method: id,
            confirm: true,
            return_url:  'http://localhost:3000/payment-success'
        });
        console.log("payment",payment);

        response = {
            message: "Payment successful",
            success: true
        };
    } catch (error) {
        console.log('Error en el pago', error);
    } finally {
        res.json(response);
    }
});

app.listen(3001,()=>{
console.log('server listening port', 3001);
});