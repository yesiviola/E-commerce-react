import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from "./Product"
import Products from "../product-data";

// eslint-disable-next-line
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function products({addToCart }) {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
          Products.map((product) => (
            <Grid item xs={12} sm={8} md={4} lg={3} key={product.id}> 
              <Product product={product} addToCart={addToCart}/>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}