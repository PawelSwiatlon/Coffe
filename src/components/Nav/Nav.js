import React from 'react';
import styles from './Nav.module.scss';

import NavItems from './NavItems/NavItems';

const Nav = () => {
    return(
        <div className={styles.wrapper}>
            <h1>Cof<span>fee</span></h1>
            <NavItems/>
        </div>
    );
}

export default Nav;