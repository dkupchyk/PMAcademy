import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";

import styles from "./PhotoDetailed.module.css";

import Loader from "../Loader/Loader";
import {getAlbum, SELECT_ALBUM_ID} from "../../store/ducks/albumDuck";

function PhotoDetailed() {

    const history = useHistory();
    const dispatch = useDispatch();
    const selectedPhoto = useSelector(state => state.photosReducer.selectedPhoto)
    const album = useSelector(state => state.albumReducer.selectedAlbum)

    const loadAlbum = (albumId) => dispatch(getAlbum(albumId));
    const onSelectAlbum = (id) => dispatch(SELECT_ALBUM_ID(id));

    const redirectToMain = () => history.push("/")

    useEffect(() => {
        loadAlbum(selectedPhoto.albumId)
    }, [])

    return (
        <div>
            {Object.keys(selectedPhoto).length === 0
                ? redirectToMain()
                : !selectedPhoto && !album

                    ? <Loader loaded={true}/>

                    : <div className={styles['photo-detailed-container']}>
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
            }
        </div>
    );

}

export default PhotoDetailed;
