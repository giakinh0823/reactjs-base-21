import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import QuantityField from '../../../components/form-control/QuantityField';


AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCartForm(props) {
    const { onSubmit } = props

    const schema = yup.object().shape({
        quantity: yup.number().min(1, "Please enter at least 1").required("Please enter quantity").typeError("Please enter a number!"),
    });

    const form = useForm({
        defaultValues: {
            quantity: 0,
        },
        resolver: yupResolver(schema),
    })


    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values)
        }
    }

    return (
        <div>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <QuantityField name="quantity" label="Quantity" form={form} />
                <Button type="submit" variant="contained" color="primary" fullWidth className={{}}>
                    Add to cart
                </Button>
            </form>
        </div>
    );
}

export default AddToCartForm;