import React from "react";
import {Link} from "react-router-dom";

import styles from './PhotoList.module.css';

function PhotoList(props) {

    return (
        <div className={styles['images-list']}>
            {props.photos.map(item =>
                <Link key={item.id}
                      to={`/photoId=${item.id}`}
                      className={styles['link']}>

                    <img className={styles['image']}
                         onClick={() => props.onSelect(item.id)}
                         src={item.thumbnailUrl}
                         alt="item"/>
                </Link>
            )}
        </div>
    );

}

export default PhotoList;
