import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    header: {
        textAlign: "center",
        fontSize: "18px",
        color: theme.palette.primary.main,
        fontWeight: "500",
    },
    menu: {
        padding: 0,
        margin: 0,
        listStyle: "none",
        transition: "all .3s",
        '& > li': {
            marginTop: theme.spacing(1),
            '&:hover': {
                color: theme.palette.primary.main,
                cursor: 'pointer',
            },
        },
    }
}))

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
    categoryList: PropTypes.array,
};

FilterByCategory.defaultProps = {
    categoryList: [],
}

function FilterByCategory(props) {

    const { categoryList, onChange } = props
    const classes = useStyles()

    const handleCatogoryClick = (category) => {
        if (onChange) {
            onChange(category.id)
        }
    }

    return (
        <div>
            <Box className={classes.root}>
                <Typography variant="subtitle1" className={classes.header}>Danh mục sản phẩm</Typography>
                <ul className={classes.menu}>
                    {categoryList.map((category) => (
                        <li key={category.id} onClick={() => handleCatogoryClick(category)}>
                            <Button color="primary" fullWidth>
                                <Typography variant="body2"> {category.name}</Typography>
                            </Button>
                        </li>
                    ))}
                </ul>
            </Box>
        </div>
    );
}

export default FilterByCategory;