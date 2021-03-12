import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from './MainPage.module.css';

import PhotoList from "../PhotoList/PhotoList";
import Loader from "../Loader/Loader";
import {fetchPhotos, SELECT_PHOTO} from "../../store/ducks/photoDuck";

function MainPage() {

    const dispatch = useDispatch();
    const photos = useSelector(state => state.photosReducer.photos);

    const loadPhotos = (start) => dispatch(fetchPhotos(start));
    const onSelectPhoto = (id) => dispatch(SELECT_PHOTO(photos[id - 1]));

    useEffect(() => {
        loadPhotos(0);
    }, []);

    return (
        <div className={styles['main-page-container']}>

            {photos.length === 0
                ? <Loader loaded={true}/>
                : <div>
                    <PhotoList photos={photos} onSelect={onSelectPhoto}/>

                    <p className={styles['load-more-text']}
                       onClick={() => loadPhotos(photos.length)}>
                        Load more
                    </p>
                </div>
            }

        </div>
    );
};

export default MainPage;
