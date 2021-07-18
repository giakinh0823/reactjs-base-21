import couterReducer from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';

const { configureStore } = require("@reduxjs/toolkit");


const rootReducer = {
    counter: couterReducer,
    user: userReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store