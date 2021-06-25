import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import useStyles from './productStyle';
import { useHistory } from "react-router-dom";

const Product = ({ product }) => {
    const classes = useStyles();
    const history = useHistory();

    //to change the path history and navigate to the new path
    const navigateProductDetails =(event)=>{
        event.preventDefault();
        history.push({
            pathname: `/product/details/${product._id}`,
            // state: { productId: 'test' }
        });
    }


    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} onClick={navigateProductDetails}/>
            <CardContent>
                <div>
                    <Typography variant="h5" gutterBottom  style={{cursor: 'pointer'}}> {/* Typography is for text in material ui and variant is that text will take the type of a header and gutterBottom is that text will have a space at the bottom*/}
                        {product.name}
                    </Typography>
                    <Typography variant="h5"> 
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color='textSecondary'>
                    {product.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Product
