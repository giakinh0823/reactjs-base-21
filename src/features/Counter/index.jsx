import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice.js';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(5,0),
        textAlign: "center",
    },
    header: {
        fontWeight: "200",
        fontSize: "100px",
        color: "#3f50b5",
    },
    button: {
        margin: theme.spacing(4, 2),
    },
    label: {
        fontSize: "30px",
        color: "#f44336",
    }
}))

function CounterFeature(props) {
    const classes= useStyles()

    //lấy counter ở rootReducer
    const counter = useSelector(state => state.counter) // useSelector là một hook giúp lấy 1 cái state trong root của mình
    const dispatch = useDispatch();

    const handleIncreaseClick = () => {
        const action = increase();
        dispatch(action);
    }

    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action);
    }

    return (
        <div class={classes.root}>
            <h1 class={classes.header}>Counter</h1>
            <p className={classes.label}>Counter {counter}</p>
            <Button className={classes.button} onClick={() => handleIncreaseClick()}  color="primary"  variant="contained">increase</Button>
            <Button className={classes.button} onClick={() => handleDecreaseClick()} color="primary"  variant="contained">decrease</Button>
        </div>
    );
}

export default CounterFeature;