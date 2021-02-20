import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.coffeeCup}></div>
                <div className={styles.text}>
                    <h1><span>Best</span> way to start the day.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed id semper risus in hendrerit gravida. </p>       
                </div>

            </div>
            <div className={styles.coffeeBag}></div>
        </div>
    );
}

export default Header;