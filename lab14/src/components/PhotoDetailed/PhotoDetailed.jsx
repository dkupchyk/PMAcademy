import React, {useEffect} from "react";
import {connect, useSelector} from "react-redux";

import styles from "./PhotoDetailed.module.css";
import {SELECT_ALBUM} from "../../store/actions";
import {fetchAlbum, fetchSixPhotos} from "../../shared/API";
import {Link} from "react-router-dom";

function PhotoDetailed(props) {

    const selectedId = useSelector(state => state.selectedPhotoId)

    const selectedPhoto = props.photos[selectedId - 1];
    const albumId = props.photos[selectedId - 1].albumId;

    const loadAlbum = (albumId) => fetchAlbum(albumId).then(data => props.selectAlbum(data));

    useEffect(() => {
        loadAlbum(albumId)
    }, [])
    
    return (
        <div className={styles['photo-detailed-container']}>
            <img className={styles['image-url']} src={selectedPhoto.url} alt="item"/>

            <div className={styles['image-description']}>
                <h2>{selectedPhoto.title}</h2>

                <Link />

                <Link to={`"/album=${0}`}
                      className={styles['link']}>
                    <p>{}</p>
                </Link>
            </div>
        </div>

    );
}

const mapStateToProps = (state) => ({
    photos: state.photos,
    selectedPhotoId: state.selectedPhotoId,
    selectedAlbum: state.selectedAlbum
});

const mapDispatchToProps = (dispatch) => ({
    selectAlbum: (id) => dispatch(SELECT_ALBUM(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetailed);
