import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,

    },
    range: {
        margin: theme.spacing(1,0),
        display: "flex",
        alignItems: "center",
        flexFlow: "row nowrap",
        "& > span": {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        }
    }
}))

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

function FilterByPrice(props) {

    const classes = useStyles()
    const { onChange } = props

    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValue => ({
            ...prevValue,
            [name]: value,
        }))
    }

    const handleSubmit = () => {
        if (onChange) {
            if(values.salePrice_gte!==0 || values.salePrice_lte!==0){
                onChange(values)
            }
        }
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0,
        })
    }

    return (
        <div>
            <Box className={classes.root}>
                <Typography variant="subtitle1">GIÁ</Typography>
                <Box className={classes.range}>
                    <TextField name={"salePrice_gte"} label="Min" variant="outlined" value={values.salePrice_gte} onChange={handleChange} />
                    <span>-</span>
                    <TextField name={"salePrice_lte"} label="Max" variant="outlined"  value={values.salePrice_lte} onChange={handleChange} />
                </Box>
                <Button variant="outlined" color="primary" onClick={handleSubmit}>Áp dụng</Button>
            </Box>
        </div>
    );
}

export default FilterByPrice;