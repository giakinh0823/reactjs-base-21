import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "40%",
        margin: "0 auto",
    },
}))

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {

    const classes = useStyles()

    const { onSubmit } = props

    const schema = yup.object().shape({
        title: yup.string().required("Please enter title")
            .min(3, "Title is too short"),
    });

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = (values) => {
        if (onSubmit) {
            onSubmit(values)
        }
        form.reset()
    }

    return (
        <div className={classes.root}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="title" label="Todo" form={form} />
            </form>
        </div>
    );
}

export default TodoForm;