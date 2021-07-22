import { makeStyles } from '@material-ui/core';
import React from 'react';
import AlbumList from './components/AlbumList';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(5, 0),
        textAlign: "center",
    },
    header: {
        fontWeight: "100",
        fontSize: "70px",
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

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {

    const classes = useStyles();

    const albumList = [
        {
            id: 1,
            name: 'Chỉ có thể là BLACKPINK',
            thumbnaiUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/8/b/b/e8bb97699b4a2c93879f34bd59feb6eb.jpg',
        },
        {
            id: 2,
            name: 'Chỉ có thể là IKON',
            thumbnaiUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/3/9/1/6391621fbddc5826d7e9a5089644f60d.jpg',
        },
        {
            id: 3,
            name: 'Chỉ có thể là WINNER',
            thumbnaiUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/f/3/0/0f300c6fdf309e61379da33f2138e67c.jpg',
        },
        {
            id: 4,
            name: 'Chỉ có thể là TREASURE',
            thumbnaiUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/7/9/5/97952f56e8726bc447de57963306cbd9.jpg',
        },
    ]

    return (
        <div className={classes.root}>
            <h1 className={classes.header}>Album</h1>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;