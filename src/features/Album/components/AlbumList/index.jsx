import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array,
};

AlbumList.defaultProps = {
    albumList: [],
}

function AlbumList(props) {
    const { albumList } = props;
    return (
        <div>
            <ul className="album-list">
                {albumList.map(album => (
                    <li key={album.id}>
                        <Album album={album}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;