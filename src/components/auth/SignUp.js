import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Styling
const useStyles = makeStyles((theme) =>({
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


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [user, setUser] = useState({name: "", email: "", password: ""});
    const classes = useStyles();
    let history = useHistory();

   const handleSubmit = (e) => {
       e.preventDefault();
       let config = {
           headers: {
               'Accept': '*/*',
               'Content-Type': 'application/json;charset=UTF-8',
           }
       }
       axios.post('http://localhost:3001/signup', { // Save user to db via post request
           name,
           email,
           password,
       },config)
       .then((res) => {
           console.log(res.data.user);
           const userRes = res.data;

           if (userRes.user) { // if we find token (user:id) we change the path
               localStorage.setItem("token", userRes.user);
               history.push('/')
           } else {
               console.log('Error')
           }
       });
   
    };
    return (
        <div>
            <div className={classes.toolbar} />
            <form
            className={ classes.formStyle }
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            >
                <Typography variant="h5">SignUp</Typography>
                <TextField 
                className={ classes.spacing }
                    id="enter-name"
                    label="Enter your name here..."
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                 />
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
                     SignUp
                 </Button>
            </form>
        </div>
    );
};

export default SignUp;
