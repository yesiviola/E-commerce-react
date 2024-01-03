/* eslint-disable react/jsx-no-undef */
import React  from 'react';
import {useContext } from 'react';
import {   CartContext } from '../App';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled, useTheme, useMediaQuery } from '@mui/material';
import { Grid } from '@mui/material';
import logo from "../assets/e-commerce.png";
import { Link } from 'react-router-dom';



const ColorChangeTypography = styled(Typography)(({ theme }) => ({
    animation: `$color-change 5s infinite`,
    '@keyframes color-change': {
        '0%': {
            color: theme.palette.primary.main,
        },
        '50%': {
            color: theme.palette.secondary.main,
        },
        '100%': {
            color: theme.palette.secondary.main,
        },
    },
}));

export default function Navbar({cart}) {
    // eslint-disable-next-line no-unused-vars
    const {state, dispatch } = useContext(CartContext);
    const { user } = state;
    const totalItems = state.basket ?   state.basket.reduce ((total,item) => total + item.quantity, 0) : 0;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    

    const handleCartClick = () => {
        console.log(state.basket);
        dispatch({type: 'EMPTY_CART' });
    };

    const handleSignOut = () => {
        dispatch({type: 'SIGN_OUT'});
    };

    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="fixed" sx={{backgroundColor: theme.palette.navbar.main}}>
                    <Toolbar sx={{padding: '0px'}}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item xs={2} sm={1}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ paddingLeft: 1, marginRight: 115 }}
                            >
                                <Link to="/">
                                <img src={logo} alt="logo" style={{ width: '140px', height: '70px', marginLeft: '-21px', marginTop: '-5px', borderRadius: '50%' }} />
                                </Link>
                            </IconButton>
                        </Grid>
                        {!isMobile && (
                            <Grid item xs={8} sm={9}>
                                <ColorChangeTypography variant="h6" component="p" sx={{ flexGrow: 0, fontFamily: 'Bold', marginLeft: '20px' }}>
                                Hello Guest
                                </ColorChangeTypography>
                                <Typography variant="h6">
                                </Typography>
                            </Grid>
                        )}

                        <Grid item xs={2} sm={1} style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}> 
                        {user ? (
                            <Button variant="outlined" color="secondary"  onClick={handleSignOut} sx={{ ml: 2, '&:hover': { backgroundColor: 'grey' }, fontSize: '0.80rem', padding: '8px 10px', marginLeft: '-10px', fontWeight: 'bold' }}> Sign Out</Button>
                        ) : (
                            <Link to="/signin">
                            <Button variant="outlined" color="secondary" sx={{ ml: 2, '&:hover': { backgroundColor: 'grey' }, fontSize: '0.80rem', padding: '8px 10px', marginLeft: '-10px', fontWeight: 'bold' }}> Sign In</Button>
                            </Link>
                        )}
                        
                        </Grid>
                        {!isMobile && (
                            <Grid item xs={1} sm={1}>
                                <Link to="/checkout">
                                <Button aria-label="show cart items" color="success" onClick={handleCartClick}>
                                    <Badge badgeContent={totalItems} color="success">
                                        <ShoppingCartIcon style={{ fontSize: 'x-large', color: 'white', marginLeft: '10px' }} />
                                    </Badge>
                                </Button>
                                </Link>
                            </Grid> 
                        )}
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    );
}

