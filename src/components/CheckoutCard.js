import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import accounting from "accounting";
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import styled from 'styled-components';



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


export default function CheckoutCard({product, quantity, removeFromCart}) {
  if (!product){
    return null;
  }

  const { name, image, price, productType } = product;
  

  return (
    <Card sx={{ maxWidth: 345 }}>
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
           Total: {accounting.formatMoney(price, "$")}
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
        <IconButton aria-label="remove from cart" onClick={() => removeFromCart(product.id)} style={{ marginLeft: 'auto' }}>
          <DeleteIcon fontSize="large"/>
        </IconButton>
      </CardActions>
    </Card>
  );
}






   