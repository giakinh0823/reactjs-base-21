import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import ProductThumnail from '../components/ProductThumnail';

const useStyles = makeStyles((theme) => ({ 
    root: {

    },
    left: {
        width: "400px",
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`
    },
    right: {
        flex: '1 1 0',
        padding: theme.spacing(1.5),
    },
}))


DetailPage.propTypes = {

};

function DetailPage(props) {

    const classes = useStyles();

    return (
        <div>
            <Box className={classes.root}>
                <Container>
                    <Paper elevation={0}>
                        <Grid container>
                            <Grid item className={classes.left}>
                                <ProductThumnail product={{}} />
                            </Grid>
                            <Grid item className={classes.right}>
                                Product info
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        </div>
    );
}

export default DetailPage;