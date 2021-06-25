import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import useStyles from './productDetailsStyle';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const classes = useStyles();
    const [product, setProduct] = useState({});
    const{id} = useParams();
    const users =[
            {id: 1, name: 'Mohsen Chkara7oms', phone: 58556231, e_mail:'mohsen@chkarahomes.com', location: 'Tunis centre ville'},
            {id: 2, name: 'Mhamed Chkara7foul', phone: 58007233, e_mail:'mhamed@chkarafoul.com', location: 'Bardo'},
        ]

    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/${id}`)
        .then(result=>{
            setProduct(result.data);
        })
        .catch(err =>{
            console.log(err);
        })
    },[])


    return (
        <div style={{ display:'flex', justifyContent:'center' }}>
        <Card className={classes.root}>
            <div className={classes.toolbar} />
            <CardMedia className={classes.media} image={product.image} title={product.name} spacing={4}/>
            <CardContent>
                <div>
                    <Typography variant="h5" gutterBottom > {/* Typography is for text in material ui and variant is that text will take the type of a header and gutterBottom is that text will have a space at the bottom*/}
                        {product.name}
                    </Typography>
                    <Typography variant="h5"> 
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color='textSecondary'>
                    {product.description}
                </Typography>
                {users.map(user=>(
                    <div key={user.id}>
                    <Typography variant="body2" color='textSecondary'>
                        created by {user.name}
                    </Typography>
                    <Typography variant="body2" color='textSecondary'>
                        phone number : {user.phone}
                    </Typography>
                    <Typography variant="body2" color='textSecondary'>
                        e-mail: {user.e_mail}
                    </Typography>
                    <Typography variant="body2" color='textSecondary'>
                        location: {user.location}
                    </Typography>
                    </div>
                ))}
                
            </CardContent>
        </Card>
        </div>
    )
}

export default ProductDetails
