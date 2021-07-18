import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import LoginForm from '../LoginForm';


Login.propTypes = {
    closeDialog: PropTypes.func
};

function Login(props) {

    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const showNoti = (message, variant) => {
        enqueueSnackbar(message, { variant: variant })
    }

    const handleSubmit = async (values) => {
        try {
            const action = login(values)
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            //close Dia log
            const {closeDialog} = props;
            if(closeDialog){
                closeDialog()
            }
            //do something here when register success
            console.log(user)
        } catch (error) {
            showNoti(error.message, "error");
            console.log("error: ", error)
        }
    }

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;