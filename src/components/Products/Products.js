import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './productsStyle';

// const products =[
//     {id: 1, name: 'Shoes', description: 'Running shoes', price:'250 $', image: 'https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw1f1ad38f/images/ProductImages/120317/120317_050_l_WR.jpg?sw=900'},
//     {id: 2, name: 'T-shirt', description: 'Nike T-shirt', price:'170 $', image: 'https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw77137889/images/ProductImages/211089/211089_018_ma_WR.jpg?sw=900'}
// ]


const Products = ({ products }) => {
    const classes = useStyles();

    

    return(
    <main className={classes.content}>
        <div className={classes.toolbar} />  {/*this div is for the height between the navbar and the products */}
        <Grid container justify="center" spacing={4}>
            {/* map throw the products */}
            {products.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> {/*xs, sm, md and lg are for responsive that the grid will take full width for mobile devices and for the others tat each device how many places out of 12 it will take*/}
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
    
}

export default Products
