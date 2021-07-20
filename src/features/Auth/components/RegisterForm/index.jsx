import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import LockOutlined from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-control/InputField';
import PasswordField from '../../../../components/form-control/PasswordField';




RegisterForm.propTypes = {
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

function RegisterForm(props) {

    const classes = useStyles();
    const { onSubmit } = props

    const schema = yup.object().shape({
        fullName: yup.string()
            .required("Please enter your fullname.")
            .test('Should has at least two words', 'Please enter at least two words.', (value) => {
                return value.split(" ").length >= 2;
            }),
        email: yup.string()
            .required("Please enter your email.")
            .email("Please enter a valid email"),
        password: yup.string()
            .required("Please enter your password.")
            .min(6, "Please enter at least 6 characters."),
        retypepassword: yup.string()
            .required("Please enter your password.")
            .oneOf([yup.ref('password')], 'Password does not match.'),
    });

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypepassword: '',
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
                Create an account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypepassword" label="Retype Password" form={form} />
                <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" fullWidth className={classes.submit}>
                    Create account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;