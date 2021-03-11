import React, {useEffect} from "react";
import {connect, useSelector} from "react-redux";

import styles from './MainPage.module.css';

import {LOAD_PHOTOS, SELECT_PHOTO} from "../../store/actions";
import {fetchSixPhotos} from "../../shared/API";
import PhotoList from "../PhotoList/PhotoList";

function MainPage(props) {

    const photos = useSelector(state => state.photos)

    const loadPhotos = (start) => fetchSixPhotos(start).then(data => props.loadPhotos(data));

    useEffect(() => {
        loadPhotos(0)
    }, [])

    const onSelectPhoto = (id) => props.selectedPhotoId(id);

    return (
        <div className={styles['main-page-container']}>

            <PhotoList photos={photos} onSelect={onSelectPhoto}/>

            <p className={styles['load-more-text']}
               onClick={() => loadPhotos(photos.length)}>
                Load more
            </p>
        </div>
    );
}

const mapStateToProps = (state) => ({photos: state.photos});
const mapDispatchToProps = (dispatch) => ({
    loadPhotos: (photos) => dispatch(LOAD_PHOTOS(photos)),
    selectedPhotoId: (id) => dispatch(SELECT_PHOTO(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
