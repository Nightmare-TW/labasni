import React from 'react';
import { AppBar, Toolbar, Typography,Button } from '@material-ui/core';
import logo from '../../assets/logo.png';
import useStyles from './navbarStyle';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();
    const handleLogout = () => {
        localStorage.clear();
        window.alert('Logout Successfuly !')
    }
   
    return (
       <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="Labasni" height="25px" className={classes.image}/>
                        Labasni
                    </Typography>
                    <div className={classes.grow} />  {/*this div in the middle for the spacing in the nav bar*/}
                    <div className={classes.link}>
                        <Link className={classes.button} to="/posts">Add a post</Link> 
                        <Button className={classes.button} variant="contained" color="primary" component={Link} to="/signup">
                            SignUp
                        </Button>
                        <Button className={classes.button} variant="contained" color="primary" component={Link} to="/login">
                            Login
                        </Button>
                        <Button className={classes.button} variant="contained" color="primary" onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>    
                </Toolbar>
            </AppBar>
       </>
    )
}

export default Navbar
