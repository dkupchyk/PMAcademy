import React from "react";

import styles from './Header.module.css';

function Header() {
    return (<div className={styles['header-wrapper']}>

        <div className={styles['rotated']}>
            <hr/>
            <p>Photo Album</p>
            <hr/>
        </div>

        <hr/>
    </div>);
}

export default Header;
