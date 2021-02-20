import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavItems.module.scss';

const NavItems = () => {
    return(
        <div className={styles.wrapper}>
            <NavLink exact to="/" 
                activeClassName={styles.navItemLinkActive}
                    className={styles.navItemLink}>
                    Home
                </NavLink>
                <NavLink to="/about" 
                    activeClassName={styles.navItemLinkActive}
                    className={styles.navItemLink}>
                    About
                </NavLink>
                <NavLink to="/contact" 
                    activeClassName={styles.navItemLinkActive}
                    className={styles.navItemLink}>
                    Contact
                </NavLink>
        </div>
    );
}

export default NavItems;