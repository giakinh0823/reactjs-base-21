import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import formatPrice from '../../../utils/common';


const useStyles = makeStyles((theme) => ({
    root: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        paddingBottom: theme.spacing(2),
    },
    description: {
        margin: theme.spacing(2, 0),
    },
    priceBox: {
        backgroundColor: theme.palette.grey[100],
        padding: theme.spacing(2),
    },
    salePrice: {
        fontSize: theme.typography.h4.fontSize,
        marginRight: theme.spacing(2),
        fontWeight: "500",
    },
    originalPrice: {
        marginRight: theme.spacing(2),
        textDecoration: "line-through"
    },
    promotionPercent: {

    },

}))

ProductInfo.propTypes = {
    product: PropTypes.object,
};

ProductInfo.defaultProps = {
    product: {},
}

function ProductInfo(props) {

    const { product } = props;
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.root}>
                <Typography component="h1" variant="h4">{product.name}</Typography>
                <Typography variant="body2" className={classes.description}>{product.shortDescription}</Typography>
                <Box className={classes.priceBox}>
                    <Box component="span" className={classes.salePrice}>{formatPrice(product.salePrice)}</Box>
                    {product.promotionPercent > 0 && (
                        <>
                            <Box component="span" className={classes.originalPrice}>{formatPrice(product.originalPrice)}</Box>
                            <Box component="span" className={classes.promotionPercent}>{`-${product.promotionPercent}%`}</Box>
                        </>
                    )}
                </Box>
            </Box>
        </div>
    );
}

export default ProductInfo;