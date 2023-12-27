import React from 'react';
// import Chekocut from './CheckoutForm/Checkout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import accounting from "accounting";
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import styled from 'styled-components';
import CheckoutCard from './CheckoutCard';
import Button from '@mui/material/Button';
import { Link }  from 'react-router-dom';


// eslint-disable-next-line
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function CheckoutPage({cart, removeFromCart}) {
  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!cart || cart.length === 0){
    return <p>No items in cart</p>
  }
  return (
    <div>
    <Typography variant="h3" align="center" style={{margin: '20px 0'}}>Shopping Cart</Typography>
      <Grid container spacing={3} style={{ marginTop: '20px'}}>
      {cart.map((item) => {
        const {name, image, price, productType, quantity } = item;
        return (
          <React.Fragment key={item.id}>
          <CheckoutCard item={item} removeFromCart={removeFromCart} /> 
    <Card sx={{ maxWidth: 340, height: 'auto'}}>
      <CardMedia
        component="img"
        height="194"
        image={image}
        title={name}
      />
      <CardContent>
        <Grid container justifyContent="space-between">
        <Grid item>
        <Typography variant="h6" color="text.secondary" style={{ fontWeight: 'bold'}}>
          {accounting.formatMoney(price, "$")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity: {quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontWeight: 'bold'}}>
          {productType}
        </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" color="text.secondary" style={{fontWeight: 'bold'}}>
            { name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            in Stock
          </Typography>
        </Grid>
        </Grid>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="rate">
          <StarIcon  style={{color: 'gold'}} />
          <StarIcon  style={{color: 'gold'}} />
          <StarIcon  style={{color: 'gold'}}/>
          <StarIcon style={{color: 'gold'}} />
          <StarIcon style={{color: 'gold'}} />
        </IconButton>
        <IconButton aria-label="remove from cart" onClick={() => removeFromCart(item.id)} style={{ marginLeft: 'auto' }}>
          <DeleteIcon fontSize="large"/>
        </IconButton>
      </CardActions>
      </Card>
      </React.Fragment>
  );
})}
    </Grid>
    <Card style={{ width: '100%', marginTop: '20px', minHeight: '200px'}}>
      <Grid container justifyContent="space-between" alignItems="center" style={{padding: '20px'}}>
        <Grid item xs={8} sm={4}>
    <Typography variant="h6" style={{ fontWeight: 'bold', marginLeft: '20px', fontSize: '2rem', color: 'CaptionText'}}>
      Total to pay: {accounting.formatMoney(total, "$")}
    </Typography>
    </Grid>
    <Grid item xs={12} sm={8}>
      <Link to="/checkout/payment" style={{ textDecoration: 'none'}}>
    <Button variant="contained" color="success" style={{ marginRight: '20px'}}>
     go to Checkout
    </Button>
      </Link>
    </Grid>
    </Grid>
    </Card>
    </div>
  );
}


