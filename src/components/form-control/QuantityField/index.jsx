import { Box, FormHelperText, IconButton, makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import React from 'react';
import { Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    box: {
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "center",
        maxWidth:"250px",
    }
}))

function QuantityField(props) {

    const { form, name, label, disabled } = props
    const { formState: { errors }, setValue } = form
    const hasError = errors[name]
    const classes = useStyles();

    return (
        <div>
            <FormControl error={!!hasError} variant="outlined" margin="normal" fullWidth size="small">
                <Controller
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <Box className={classes.box}>
                            <IconButton>
                                <RemoveCircleOutlineIcon color="primary" onClick={() => {
                                    setValue(field.name, Number.parseInt(field.value)<=1 ? 1: Number.parseInt(field.value) - 1)
                                }} />
                            </IconButton>
                            <OutlinedInput
                                {...field}
                                id={name}
                                type={'number'}
                                disabled={disabled}
                                error={!!hasError}
                                helperText={errors[name]?.message}
                            />
                            <IconButton>
                                <AddCircleOutline color="primary" onClick={() => {
                                    setValue(name, Number.parseInt(field.value) ? Number.parseInt(field.value) + 1: 1)
                                }} />
                            </IconButton>
                        </Box>
                    )}
                />
                <FormHelperText>
                    {errors[name]?.message}
                </FormHelperText>
            </FormControl>
        </div>
    );
}

export default QuantityField;