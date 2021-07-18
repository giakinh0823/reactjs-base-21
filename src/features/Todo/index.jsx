import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        padding: "0 0 150px 0",
    },
    header: {
        fontWeight: "200",
        fontSize: "100px",
        color: "#3f50b5",
    },
}))

function TodoFeature(props) {

    const classes = useStyles();

    const match = useRouteMatch();

    return (
        <div className={classes.root}>
            <h1 className={classes.header}>Todo share UI</h1>
            <Switch>
                <Route path={match.path} component={ListPage} exact/>
                <Route path={`${match.path}/:todoId`} component={DetailPage}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default TodoFeature;