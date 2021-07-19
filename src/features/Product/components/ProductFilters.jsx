import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';


ProductFilters.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
    categoryList: PropTypes.array,
};

ProductFilters.defaultProps = {
    filters: {},
    categoryList: [],
}

function ProductFilters(props) {
    const {categoryList, filters, onChange} = props

    const handleCategoryChange = (newCategoryId) => {
        const newFilters = {
            ...filters,
            'category.id': newCategoryId,
        }
        if(onChange){
            console.log(newFilters)
            onChange(newFilters)
        }
    }

    const handleChange = (values) => {
        if(onChange){
            onChange(values)
        }
     }

    return (
        <div>
            <FilterByCategory onChange={handleCategoryChange} categoryList= {categoryList}/>
            <FilterByPrice onChange={handleChange}/>
            <FilterByService filters={filters} onChange={handleChange}/>
        </div>
    );
}

export default ProductFilters;