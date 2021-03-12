import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import styles from './Album.module.css';

import PhotoList from "../PhotoList/PhotoList";
import Loader from "../Loader/Loader";
import {getUser, getAlbumPhotos} from "../../store/ducks/albumDuck";
import {SELECT_PHOTO} from "../../store/ducks/photoDuck";

function Album() {

    const history = useHistory();
    const dispatch = useDispatch();

    const photos = useSelector(state => state.albumReducer.albumPhotos);
    const id = useSelector(state => state.albumReducer.selectedAlbumId);
    const user = useSelector(state => state.albumReducer.albumUser);

    const loadPhotos = (start) => dispatch(getAlbumPhotos(id, start));
    const loadUserInfo = (id) => dispatch(getUser(id));
    const onSelectPhoto = (id) => dispatch(SELECT_PHOTO(photos[id - 1]));

    const redirectToMain = () => history.push("/")

    useEffect(() => {
        if (photos.length === 0) loadPhotos(0);

        loadUserInfo(id);
    }, [])

    return (
        <div className={styles['album-container']}>

            {id === null
                ? redirectToMain()
                : !user || photos.length === 0
                    ? <Loader loaded={true}/>
                    : <div>

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
            }

        </div>
    );
}

export default Album;
