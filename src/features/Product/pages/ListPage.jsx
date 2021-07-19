import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import Pagination from '@material-ui/lab/Pagination';
import ProductSort from '../components/ProductSort';
import ProductFilters from '../components/ProductFilters';
import FilterViewer from '../components/FilterViewer';
import categoryApi from '../../../api/categoryApi'



const useStyles = makeStyles((theme) => ({
    root: {

    },
    left: {
        width: "250px",
    },
    right: {
        flex: '1 1 0',
    },
    pagination: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        marginTop: "20px",
        paddingBottom: "20px",

    }
}))

ListPage.propTypes = {

};

function ListPage(props) {
    const classes = useStyles();
    const [categoryList, setCategoryList] = useState([]);
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page: 1,
    })
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 12,
        _sort: 'salePrice:ASC'
    });

     
    useEffect(() => {
        ;(async () => {
            try {
                const response = await categoryApi.getAll();
                setCategoryList(response.map((x) => ({
                    id: x.id,
                    name: x.name,
                })))
                console(categoryList);
            } catch (error) {
                console.log("Fail to featch")
            }
        })()
    }, [categoryList])

    useEffect(() => {
        ; (async () => {
            try {
                const response = await productApi.getAll(filters);
                console.log(response)
                setProductList(response.data)
                setPagination(response.pagination)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        })();
    }, [filters])

   

    const handlePageChange = (e, page) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            _page: page,
        }))
    }

    const handleSortChange = (newSortValue) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            _sort: newSortValue,
        }))
    }

    const handleFiltersChange = (newFilters) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            ...newFilters,
        }))
    }

    const setNewFilters = (newFilters) => {
        setFilters(newFilters)
    }


    return (
        <div>
            <Box>
                <Container>
                    <Grid container spacing={1}>
                        <Grid className={classes.left} item>
                            <Paper elevation={0} >
                                <ProductFilters filters={filters} onChange={handleFiltersChange} categoryList={categoryList}/>
                            </Paper>
                        </Grid>
                        <Grid className={classes.right} item>
                            <Paper elevation={0} >
                                <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
                                <FilterViewer filters={filters}  onChange={setNewFilters} categoryList={categoryList}/>
                                {loading ? <ProductSkeletonList length={12} /> : <ProductList data={productList} />}
                                <Box className={classes.pagination}>
                                    <Pagination
                                        count={Math.ceil(pagination.total / pagination.limit)}
                                        color="primary"
                                        page={pagination.page}
                                        onChange={(e, page) => handlePageChange(e, page)}
                                    />
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default ListPage;