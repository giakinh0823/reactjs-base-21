import { Box, Chip, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        margin: theme.spacing(2, 0),
        listStyle: "none",
        padding: 0,
        "& > li": {
            margin: 0,
            padding: theme.spacing(1),
        }
    },

}))

FilterViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
    categoryList: PropTypes.array,
};

FilterViewer.defaultProps = {
    filters: {},
    categoryList: [],
}

const FILTER_LIST = [
    {
        id: 1,
        getLabel: (filters) => 'Giao hàng miễn phí',
        isActive: (filters) => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => { },
        onToggle: (filters) => {
            const newFilters = { ...filters }
            if (newFilters.isFreeShip) {
                delete newFilters.isFreeShip
            } else {
                newFilters.isFreeShip = true;
            }
            return newFilters;
        },

    },
    {
        id: 2,
        getLabel: (filters) => 'Có khuyến mãi',
        isActive: () => true,
        isVisible: (filters) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {...filters}
            delete newFilters.isPromotion
            return newFilters;
        },
        onToggle: () => {},

    },
    {
        id: 3,
        getLabel: (filters) => `Từ ${filters?.salePrice_gte} đến ${filters?.salePrice_lte}`,
        isActive: () => true,
        isVisible: (filters) => {
            if(Object.keys(filters).includes('salePrice_gte') && Object.keys(filters).includes('salePrice_lte') && (filters.salePrice_gte !== 0 || filters.salePrice_lte !== 0) ){   
                return true;
            }else{
                return false;
            }
        },
        isRemovable: true,
        onRemove: (filters) => { 
            const newFilters = {...filters}
            delete newFilters.salePrice_lte
            delete newFilters.salePrice_gte
            return newFilters;
        },
        onToggle: () => {},

    },
    {
        id: 4,
        getLabel: (filters, categoryList) => {
            const category = categoryList.filter(x => x.id === filters["category.id"])
            console.log(categoryList)
            return category[0]?.name || "Danh mục"
        },
        isActive: () => true,
        isVisible: (filters) => Object.keys(filters).includes('category.id'),
        isRemovable: true,
        onRemove: (filters) => { 
            const newFilters = {...filters}
            delete newFilters["category.id"]
            return newFilters;
        },
        onToggle: (filters) => true,

    },
]

function FilterViewer(props) {
    const classes = useStyles()
    const {categoryList, filters, onChange } = props
    const visibleFilters = useMemo(() => {
        return FILTER_LIST.filter((x) => x.isVisible(filters))
    }, [filters])


    return (
        <div>
            <Box component="ul" className={classes.root}>
                {visibleFilters.map((x, index)=> (
                    <li key={x.id}>
                        <Chip
                            label={x.id!==4 ? x.getLabel(filters): x.getLabel(filters, categoryList)}
                            color={x.isActive(filters) ? 'primary' : 'default'}
                            clickable={!x.isRemovable}
                            onClick={x.isRemovable ? null : () => {
                                if (onChange) {
                                    const newFilters = x.onToggle(filters);
                                    onChange(newFilters);
                                }
                            }}
                            onDelete={x.isRemovable ? () => {
                                if (onChange) {
                                    const newFilters = x.onRemove(filters);
                                    onChange(newFilters);
                                }
                            } : null}
                        />
                    </li>
                ))}
            </Box>
        </div>
    );
}

export default FilterViewer;