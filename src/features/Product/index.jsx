import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ListPage from '../Product/pages/ListPage';
import { Box } from '@material-ui/core';

ProductFeature.propTypes = {

};

function ProductFeature(props) {
    const match = useRouteMatch()

    return (
        <div>
            <Box pt={4}>
                <Switch>
                    <Route path={match.url} component={ListPage} exact />
                </Switch>
            </Box>
        </div>
    );
}

export default ProductFeature;