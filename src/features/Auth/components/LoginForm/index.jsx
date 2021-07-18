import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import LockOutlined from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-control/InputField';
import PasswordField from '../../../../components/form-control/PasswordField';




LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2, 2),
    },
    avatar: {
        margin: "0 auto 15px",
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        textAlign: "center",
    },
    submit: {
        margin: theme.spacing(2, 0, 0, 0),
    },
    linearProgress: {
        margin: theme.spacing(0, 0, 4, 0)
    }
}))

function LoginForm(props) {

    const classes = useStyles();
    const { onSubmit } = props

    const schema = yup.object().shape({
        identifier: yup.string()
            .required("Please enter your email.")
            .email("Please enter a valid email"),
        password: yup.string()
            .required("Please enter your password.")      
    });

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
    })


   

    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values)
        }
    }

    const { isSubmitting } = form.formState
    
    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.linearProgress} color="secondary" />}
            <Avatar className={classes.avatar}>
                <LockOutlined />
            </Avatar>
            <Typography component="h3" variant="h5" className={classes.title}>
                Sign In
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" fullWidth className={classes.submit}>
                    Sign in
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;