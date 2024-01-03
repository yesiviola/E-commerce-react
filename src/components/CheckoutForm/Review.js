/* eslint-disable no-unused-vars */
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import {useStateValue } from "../../StateProvider";
import {getBasketTotal } from "../../reducer";
import accounting from "accounting";

const Review = () => {
    const [{basket}, dispatch] = useStateValue();
    
    return (
        <>
            <Typography variant= 'h6' gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
              {
                basket?.map(Producto=> (
                  <ListItem key={Producto.name}>
                    <ListItemText primary={Producto.name} secondary={`Qty : ${Producto.quantity}`}/>
                    <Typography variant="body2">
                      {accounting.formatMoney(Producto.price,"$")}
                    </Typography>
              </ListItem>
                ))
              }
              <ListItem>
                <ListItemText primary="Total"/>
                <Typography variant="subtitle1" style={{fontWeight: 700}}>
                  {accounting.formatMoney(getBasketTotal(basket),"$")}
                </Typography>
              </ListItem>
              
            </List>
        </>
    );
}

export default Review;