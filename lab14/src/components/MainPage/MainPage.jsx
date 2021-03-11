import React, {useEffect} from "react";

import styles from './MainPage.module.css';

import {connect, useSelector} from "react-redux";
import {LOAD_PHOTOS} from "../../store/actions";
import {fetchPhotos} from "../../shared/API";
import PhotoList from "../PhotoList/PhotoList";

function MainPage(props) {

    const photos = useSelector(state => state.photos)

    const loadPhotos = () => fetchPhotos(0).then(data => props.loadPhotos(data));

    useEffect(() => {
        return loadPhotos()
    }, [])

    return (
        <div className={styles['main-page-container']}>

            <PhotoList photos={photos}/>

            <p className={styles['load-more-text']}>Load more</p>
        </div>
    );
}

const mapStateToProps = (state) => ({photos: state.photos});
const mapDispatchToProps = (dispatch) => ({
    loadPhotos: (photos) => dispatch(LOAD_PHOTOS(photos))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
