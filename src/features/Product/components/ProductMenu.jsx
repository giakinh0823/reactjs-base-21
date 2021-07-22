import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        listStyle: "none",
        margin: 0,
        "& > li": {
            padding: theme.spacing(2, 4),
        },
        "& > li > a": {
            color: theme.palette.grey[700],
            textDecoration: "none",
        },
        "& > li > a.active": {
            color: theme.palette.primary.main,
            textDecoration: "underline",
        }
    }
}))

ProductMenu.propTypes = {

};

function ProductMenu(props) {

    const match = useRouteMatch()
    const { url } = match;
    const classes = useStyles();
    return (
        <div>
            <Box component="ul" className={classes.root}>
                <li>
                    <NavLink to={`${url}`} exact>Description</NavLink>
                </li>
                <li>
                    <NavLink  to={`${url}/additional`}>Additional Information</NavLink>
                </li>
                <li>
                    <NavLink  to={`${url}/reviews`}>Reviews</NavLink>
                </li>
            </Box>
        </div>
    );
}

export default ProductMenu;