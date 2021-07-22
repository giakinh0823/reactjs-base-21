import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { addToCart } from '../../Cart/CartSlice';
import AddToCartForm from '../components/AddToCartForm';
import useProductDetail from '../components/Hooks/useProductDetail';
import ProductAdditional from '../components/Menu/ProductAdditional';
import ProductDescription from '../components/Menu/ProductDescription';
import ProductReviews from '../components/Menu/ProductReviews';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductThumnail from '../components/ProductThumnail';

const useStyles = makeStyles((theme) => ({ 
    root: {

    },
    left: {
        width: "400px",
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`
    },
    right: {
        flex: '1 1 0',
        padding: theme.spacing(1.5),
    },
    loading: {
        // display: 'flex',
        // justifyContent: "center",
        // alignItems: "center", 
        // height: "85vh",   
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
    }
}))


DetailPage.propTypes = {

};

function DetailPage(props) {

    const classes = useStyles();
    const match = useRouteMatch();
    const dispatch = useDispatch();

    const {product, loading} = useProductDetail(match.params.productId)
    
    if(loading){
        return (
            <Box className={classes.loading}>
               <LinearProgress color="primary"/>
            </Box>    
        )
    }

    const handleAddToCartSubmit = (formValues) => {
        const {quantity} = formValues
        const action = addToCart({
            id: product.id,
            product: product,
            quantity: quantity, 
        });
        console.log(action)
        dispatch(action)
    }

    return (
        <div>
            <Box className={classes.root}>
                <Container>
                    <Paper elevation={0}>
                        <Grid container>
                            <Grid item className={classes.left}>
                                <ProductThumnail product={product} />
                            </Grid>
                            <Grid item className={classes.right}>
                                <ProductInfo product={product}/>
                                <AddToCartForm onSubmit={handleAddToCartSubmit}/>
                            </Grid>
                        </Grid>
                    </Paper>
                    <ProductMenu/>
                    <Switch>
                        <Route path={match.url} exact>
                            <ProductDescription product={product}/>
                        </Route>
                        <Route path={`${match.url}/additional`}>
                            <ProductAdditional product={product}/>
                        </Route>
                        <Route path={`${match.url}/reviews`}>
                            <ProductReviews product={product}/>
                        </Route>
                    </Switch>
                </Container>
            </Box>
        </div>
    );
}

export default DetailPage;