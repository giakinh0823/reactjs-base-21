import { Paper } from '@material-ui/core';
import DOMPuryfy from 'dompurify';
import React from 'react';



function ProductDescription(props) {
    const {product} = props

    const safeDescription = DOMPuryfy.sanitize(product.description)

    return (
       <Paper elevation={0} style={{padding: '25px', margin: "40px 0"}}>
            <div dangerouslySetInnerHTML={{__html:safeDescription}} />
       </Paper>
    );
}

export default ProductDescription;