import { createSlice } from '@reduxjs/toolkit';


const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: [],
    },
    reducers: {
        showMiniCart(state, action) {
            state.showMiniCart = true;
        },
        hideMiniCart(state, action) {
            state.showMiniCart = false;
        },
        addToCart(state, action){
            //newItem ={id, product, quantity}
            const newItem  = action.payload;
            const index = state.cartItems.findIndex(item => item.id === newItem.id);
            if(index >=0){
                state.cartItems[index].quantity += newItem.quantity;
            }else{
                state.cartItems.push(newItem);
            }
        },
        setQuantity(state, action){
            const { id, quantity} = action.payload;
            //check is product is availble in cart
            const index = state.cartItems.findIndex(item => item.id === id);
            if(index >= 0) {
                state.cartItems[index].quantity = quantity;
            }
        },
        removeFromCart(state, action){
            const idNeedToRemove = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== idNeedToRemove)
        },
    }
})

const { actions, reducer } = CartSlice
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions
export default reducer

