import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_DEFAULTS } from '../../../constants';

ProductThumnail.propTypes = {
    product: PropTypes.object,
};

ProductThumnail.defaultProps = {
    product: {},
}

function ProductThumnail(props) {
    const { product } = props
    const thumbnailUrl = product.thumbnail ?
        `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_DEFAULTS;
    return (
        <div>
            <Box>
                <img src={thumbnailUrl} alt={product.name} width={"100%"} />
            </Box>
        </div>
    );
}

export default ProductThumnail;