import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from '../Product/pages/ListPage';
import DetailPage from './pages/DetailPage';

ProductFeature.propTypes = {

};

function ProductFeature(props) {
    const match = useRouteMatch()

    return (
        <div>
            <Box pt={4}>
                <Switch>
                    <Route path={match.url} component={ListPage} exact />
                    <Route path={`${match.url}/:productId`} component={DetailPage} />
                </Switch>
            </Box>
        </div>
    );
}

export default ProductFeature;