import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

ProductSort.propTypes = {
    onChange: PropTypes.func,
};



function ProductSort(props) {
    const {currentSort, onChange} = props
    const handleOnChange = (event, newValue) => {
        if(onChange) {
            onChange(newValue)
        }
    }
    return (
        <div>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                value={currentSort}
                onChange={handleOnChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Giá thấp tới cao" value="salePrice:ASC" />
                <Tab label="Giáo cao tới thấp" value="salePrice:DESC" />
            </Tabs>
        </div>
    );
}

export default ProductSort;