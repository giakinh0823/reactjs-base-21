import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
    },
    list: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        "& > li": {
            display: "flex",
            alignItems: "center",

        }
    }
}))

FilterByService.propTypes = {
    onChange: PropTypes.func,
    filters: PropTypes.object,
};

FilterByService.defaultProps = {
    filters: {},
};

function FilterByService(props) {

    const classes = useStyles()
    const { filters, onChange } = props

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (onChange) {
            onChange({ [name]: checked })
        }
    }

    return (
        <div>
            <Box className={classes.root}>
                <Typography variant="subtitle1">DỊCH VỤ</Typography>
                <ul className={classes.list}>
                    {[{ value: 'isPromotion', label: 'Vận chuyển miễn phí' }, { value: 'isFreeShip', label: 'Miến phí ship' }].map((service) => (
                        <li key={service.value}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={handleChange}
                                        checked={Boolean(filters[service.value])}
                                        name={service.value}
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }} />
                                }
                                label={service.label}
                            />
                        </li>
                    ))}
                </ul>
            </Box>
        </div>
    );
}

export default FilterByService;