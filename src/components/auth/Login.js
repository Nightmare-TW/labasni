import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Styling
const useStyles = makeStyles((theme)=>({
    toolbar: theme.mixins.toolbar,
    formStyle: {
        margin:"0px auto",
        padding: "30px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #0000"
    },
    spacing: {
        marginTop: "20px"
    }
}));


const Login = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();


    const handleLogin = (e) => {
        e.preventDefault();
        let config = {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }
        axios.post('http://localhost:3001/login', { 
            email,
            password,
        },config)
        .then((res) => {
            const userRes = res.data;

            if (userRes) { // just if we find token we go to '/' path...
                localStorage.setItem("token", userRes);
                history.push('/')
                window.alert(`Welcome You Login Successfuly ${email}`)
            } else {
                window.alert('Try Again')
            }
        });
        setEmail("")
        setPassword("")
     };

    return (
        <div>
            <div className={classes.toolbar} />
            <form
            className={ classes.formStyle }
            noValidate
            autoComplete="off"
            onSubmit={handleLogin}
            >
                <Typography variant="h5">Login</Typography>
                <TextField 
                className={ classes.spacing }
                    id="enter-email"
                    label="Enter your email here..."
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                 />
                <TextField 
                className={ classes.spacing }
                    id="enter-password"
                    type="password"
                    label="Enter your password here..."
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                 />
                 <Button
                className={ classes.spacing }
                 variant="contained"
                 color="primary"
                 type="submit"
                 >
                     Login
                 </Button>
            </form>
        </div>
    );
};

export default Login;
