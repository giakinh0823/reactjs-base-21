import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';
import PropTypes from 'prop-types'
import { useSnackbar } from 'notistack';


Register.propTypes = {
    closeDialog: PropTypes.func
};

function Register(props) {

    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const showNoti = (message, variant) => {
        enqueueSnackbar(message, { variant: variant })
    }

    const handleSubmit = async (values) => {
        try {
            //auto set usernam = email
            values.username = values.email;
            const action = register(values)
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            //close Dia log
            const {closeDialog} = props;
            if(closeDialog){
                closeDialog()
            }
            //do something here when register success
            console.log(user)
            showNoti("Register successfully!🎉", "success");
        } catch (error) {
            showNoti(error.message, "error");
            console.log("error: ", error)
        }
    }

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;