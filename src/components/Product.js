import React  from 'react';
import {useNavigate  } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from "accounting";
import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';
import Grid from '@mui/material/Grid';


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

export default function Product({product, addToCart}) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const [ { basket }, dispatch] = useStateValue();


  const addToBasket = () => {

     const index = basket.findIndex((cartItem) => cartItem.id === product.id);


    if (index >= 0) {

      dispatch({
        type: actionType.INCREMENT_QUANTITY,
        id: product.id,
      });
    } else  {

    dispatch({
      type: actionType.ADD_TO_BASKET,
      item: {
         id:product.id,
         name: product.name,
         image: product.image,
         price: product.price,
         productType: product.productType,
       description: product.description,
        quantity: 1,
      },
    });
  }

    addToCart(product, 1);
     navigate("/checkout", {state: { product }});
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (!product){
    return null;
  }


  const {name, productType, image, price,  description} = product;
  console.log(product.image);

  
  return (
    <Grid item xs={12}>
    <Card sx={{ maxWidth: 345, minHeight: '400px', height: 'auto'}}>
      <CardHeader
        avatar={
          <Avatar src="/e-commerce-yese.png"
          aria-label="recipe"
          sx={{ bgcolor: red[700]}}>
          </Avatar>
        }
        action={
          <Typography variant="h6" color="text.secondary" style={{ fontWeight: 'bold'}}>
            {accounting.formatMoney(price, "$")}
          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={{fontWeight: 'bold'}}>
        {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick={addToBasket}>
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="rate">
          <StarIcon  style={{color: 'gold'}} />
          <StarIcon  style={{color: 'gold'}} />
            <StarIcon  style={{color: 'gold'}}/>
                <StarIcon style={{color: 'gold'}} />
                    <StarIcon style={{color: 'gold'}} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph> {description}</Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
  );
}
