import React, {useEffect} from "react";
import {connect, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import styles from "./PhotoDetailed.module.css";
import {SELECT_ALBUM, SELECT_ALBUM_ID} from "../../store/actions";
import {fetchAlbum} from "../../shared/API";

function PhotoDetailed(props) {

    const selectedPhoto = useSelector(state => state.selectedPhoto)
    const album = useSelector(state => state.selectedAlbum)

    const loadAlbum = (albumId) => fetchAlbum(albumId).then(data => props.selectAlbum(data));

    useEffect(() => {
        loadAlbum(selectedPhoto.albumId)
    }, [])

    const onSelectAlbum = (id) => props.selectAlbumId(id);

    return (
        <div className={styles['photo-detailed-container']}>
            <img className={styles['image-url']} src={selectedPhoto.url} alt="item"/>

            <div className={styles['image-description']}>
                <h2>{selectedPhoto.title}</h2>

                <Link to={`/album=${0}`}
                      onClick={() => onSelectAlbum(selectedPhoto.albumId)}
                      className={styles['link']}>
                    <p>Album: <span>{album.title}</span></p>
                </Link>
            </div>
        </div>

    );
}

const mapStateToProps = (state) => ({
    photos: state.photos,
    selectedPhoto: state.selectedPhoto,
    selectedAlbumId: state.selectedAlbumId
});

const mapDispatchToProps = (dispatch) => ({
    selectAlbumId: (id) => dispatch(SELECT_ALBUM_ID(id)),
    selectAlbum: (album) => dispatch(SELECT_ALBUM(album))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetailed);
