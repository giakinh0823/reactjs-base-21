import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import categoryApi from '../../../api/categoryApi';
import productApi from '../../../api/productApi';
import FilterViewer from '../components/FilterViewer';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';



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
    const history = useHistory();
    const location = useLocation();
    const queryParams = queryString.parse(location.search)
    // const queryParams = useMemo(() => {
    //     const params = queryString.parse(location.search);
    //     return {
    //         ...params,
    //         _page: Number.parseInt(params._page) ||  1,
    //         _limit: Number.parseInt(params._limit) ||  12,
    //         _sort: params._sort || 'salePrice:ASC',
    //         isPromotion: params.isPromotion === "true",
    //         isFreeShip: params.isFreeShip === "true",
    //     }
    // }, [location.search])
    const [categoryList, setCategoryList] = useState([]);
    const [loadingCategory, setLoadingCategory] = useState(true)
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page: 1,
    })

    const [filters, setFilters] = useState(() => ({
        ...queryParams,
        _page: Number.parseInt(queryParams._page) || 1,
        _limit: Number.parseInt(queryParams._limit) || 12,
        _sort: queryParams._sort || 'salePrice:ASC'
    }));

    useEffect(() => {
        ; (async () => {
            try {
                const response = await categoryApi.getAll();
                setCategoryList(response.map((x) => ({
                    id: x.id,
                    name: x.name,
                })))
                setLoadingCategory(false)
            } catch (error) {
                console.log("Fail to featch")
            }
        })()
    }, [])

    useEffect(() => {
        ; (async () => {
            try {
                const response = await productApi.getAll(filters);
                setProductList(response.data)
                setPagination(response.pagination)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        })();
    }, [filters])

    useEffect(() => {
        ; (async () => {
            try {
                const response = await productApi.getAll(filters);
                setProductList(response.data)
                setPagination(response.pagination)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        })();
    }, [filters])

    useEffect(() => {
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        })
    }, [history, filters])


    const handlePageChange = (e, page) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            _page: page,
        }))

        // const filters = {
        //     ...queryParams,
        //     _page: page,
        // }
        // history.push({
        //     pathname: history.location.pathname,
        //     search: queryString.stringify(filters),
        // })
    }

    const handleSortChange = (newSortValue) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            _sort: newSortValue,
        }))

        // const filters = {
        //     ...queryParams,
        //     _sort: newSortValue,
        // }

        // history.push({
        //     pathname: history.location.pathname,
        //     search: queryString.stringify(filters),
        // })
    }

    const handleFiltersChange = (newFilters) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            ...newFilters,
        }))

        // const filters = {
        //     ...queryParams,
        //     ...newFilters,
        // }

        // history.push({
        //     pathname: history.location.pathname,
        //     search: queryString.stringify(filters),
        // })
    }

    const setNewFilters = (newFilters) => {
        setFilters(newFilters)
        // const filters = {
        //     ...queryParams,
        //     ...newFilters,
        // }
        // history.push({
        //     pathname: history.location.pathname,
        //     search: queryString.stringify(filters),
        // })
    }


    return (
        <div>
            <Box>
                <Container>
                    <Grid container spacing={1}>
                        <Grid className={classes.left} item>
                            <Paper elevation={0} >
                                {loadingCategory && <LinearProgress className={classes.linearProgress} color="primary" />}
                                <ProductFilters filters={filters} onChange={handleFiltersChange} categoryList={categoryList} />
                            </Paper>
                        </Grid>
                        <Grid className={classes.right} item>
                            <Paper elevation={0} >
                                {loading && <LinearProgress color="primary"/>}
                                <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
                                <FilterViewer filters={filters} onChange={setNewFilters} categoryList={categoryList} />
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