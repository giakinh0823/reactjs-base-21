import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/useApi';
import StorageKeys from '../../constants/storage-keys';


export const register = createAsyncThunk(
    'users/register',
    async (payload) => {
        //call api to register
        const data = await userApi.register(payload);
        //save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
        return data.user;
    }
)


export const login = createAsyncThunk(
    'users/login',
    async (payload) => {
        //call api to register
        const data = await userApi.login(payload);
        //save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
        return data.user;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {
        logout(state) {
            //clear local storage
            state.current = {}
            localStorage.removeItem(StorageKeys.USER)
            localStorage.removeItem(StorageKeys.TOKEN)
        }
    },
    extraReducers: {
        //'user/register/fulfilled': () => {}
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    }
})

const { actions, reducer } = userSlice
export const {logout} = actions
export default reducer