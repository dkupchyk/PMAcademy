import React from "react";

import styles from './Album.module.css';
import Header from "../../shared/Header/Header";

function Album() {
  return (
      <div className={styles['album-container']}>

          {/*<Header title="Album"/>*/}

          <div className={styles['images-list']}>
              <img src="./logo512.png" className={styles['image']} alt="item"/>
              <img src="./logo512.png" className={styles['image']} alt="item"/>
              <img src="./logo512.png" className={styles['image']} alt="item"/>
              <img src="./logo512.png" className={styles['image']} alt="item"/>
              <img src="./logo512.png" className={styles['image']} alt="item"/>
              <img src="./logo512.png" className={styles['image']} alt="item"/>
              <img src="./logo512.png" className={styles['image']} alt="item"/>
              <img src="./logo512.png" className={styles['image']} alt="item"/>
              <img src="./logo512.png" className={styles['image']} alt="item"/>
          </div>

          <p className={styles['load-more-text']}>Load more</p>
      </div>
  );
}

export default Album;
