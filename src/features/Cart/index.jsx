import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsTotalSelector } from './Selectors';


function CartFuture(props) {

    const cartTotal = useSelector(cartItemsTotalSelector)

    return (
        <div>
            {cartTotal}
        </div>
    );
}


export default CartFuture;