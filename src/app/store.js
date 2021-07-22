import couterReducer from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';
import cartReducer from '../features/Cart/CartSlice'

const { configureStore } = require("@reduxjs/toolkit");


const rootReducer = {
    counter: couterReducer,
    user: userReducer,
    cart: cartReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store