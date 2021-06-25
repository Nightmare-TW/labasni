import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from '../../assets/logo.png';
import useStyles from './navbarStyle';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();
    return (
       <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="Labasni" height="25px" className={classes.image}/>
                        Labasni
                    </Typography>
                    <div className={classes.grow} />  {/*this div in the middle for the spacing in the nav bar*/}
                    <div className={classes.button}>
                        <Link to="/posts">Add a post</Link>    
                    </div>
                </Toolbar>
            </AppBar>
       </>
    )
}

export default Navbar
