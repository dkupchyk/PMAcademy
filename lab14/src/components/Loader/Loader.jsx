import React from "react";
import {BeatLoader} from "react-spinners";

import styles from './Loader.module.css';

function Loader(props) {

    return (
        <div className={styles['loader-component']}>
            <BeatLoader loading={props.loaded}/>
        </div>
    );
}

export default Loader;
