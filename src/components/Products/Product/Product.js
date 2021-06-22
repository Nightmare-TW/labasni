import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './productStyle'

const Product = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name}/>
            <CardContent>
                <div>
                    <Typography variant="h5" gutterBottom> {/* Typography is for text in material ui and variant is that text will take the type of a header and gutterBottom is that text will have a space at the bottom*/}
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
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart"> {/*the aria-label is for the user where the cart icon does not appear*/}
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
