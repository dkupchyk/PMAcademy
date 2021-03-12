import React, {useEffect, useState} from "react";
import {connect, useSelector} from "react-redux";

import styles from './Album.module.css';

import {fetchAlbumPhotos, fetchUserInfo} from "../../shared/API";
import PhotoList from "../PhotoList/PhotoList";
import {LOAD_ALBUM_PHOTOS, SELECT_PHOTO} from "../../store/actions";

function Album(props) {

    const [user, setUser] = useState({});

    const photos = useSelector(state => state.albumPhotos)
    const id = useSelector(state => state.selectedAlbumId)

    const loadPhotos = (start) => fetchAlbumPhotos(id, start).then(data => props.loadAlbumPhotos(data));
    const loadUserInfo = () => fetchUserInfo(id).then(data => setUser(data.user));

    useEffect(() => {
        console.log(photos)
        if(photos.length === 0) {
            loadPhotos(0);
            loadUserInfo(id);
        }
    }, [])

    const onSelectPhoto = (id) => props.selectedPhoto(photos[id - 1]);

    return (
        <div className={styles['album-container']}>

            <div>
                <h2>Album</h2>
                <div className={styles['user-info']}>
                    <p>{user.name}</p>
                    <p> - </p>
                    <p>{user.email}</p>
                </div>
            </div>

            <PhotoList photos={photos} onSelect={onSelectPhoto}/>

            <p className={styles['load-more-text']}
               onClick={() => loadPhotos(photos.length)}>
                Load more
            </p>
        </div>
    );
}

const mapStateToProps = (state) => ({
    albumPhotos: state.albumPhotos,
    selectedAlbumId: state.selectedAlbumId
});

const mapDispatchToProps = (dispatch) => ({
    selectedPhoto: (photo) => dispatch(SELECT_PHOTO(photo)),
    loadAlbumPhotos: (photos) => dispatch(LOAD_ALBUM_PHOTOS(photos))
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);

