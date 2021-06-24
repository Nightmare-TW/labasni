import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo.png';
import useStyles from './navbarStyle';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();
   
    return (
       <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="Labasni" height="25px" className={classes.image}/>
                        Labasni
                    </Typography>
                    <div className={classes.grow} />
                    <Button color="inherit" > <Link to="/signup">SignUp</Link></Button>  {/*this div in the middle for the spacing in the nav bar*/}
                    <Button color="inherit" > <Link to="/login">Login</Link></Button>  {/*this div in the middle for the spacing in the nav bar*/}
                    <div className={classes.button}>    
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary"> {/*the badge content is equal to the number of items that we have*/}
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
       </>
    )
}

export default Navbar
