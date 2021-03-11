import React from "react";

import styles from './PhotoList.module.css';


function PhotoList({photos}) {

    console.log(photos)
    return (
        <div className={styles['images-list']}>
            {photos.map(item => <img key={item.id} src={item.url} className={styles['image']} alt="item"/>)}
        </div>
    );
}

export default PhotoList;
