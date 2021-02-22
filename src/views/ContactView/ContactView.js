import React from 'react';

import styles from './ContactView.module.scss';

const ContactView = () => {
    return(
        <div className={styles.wrapper}>
            <h1>Contact:</h1>
            <ul>
                <li>Email: pswiatlon02@gmail.com</li>
                <li>Git: <a href='https://github.com/PawelSwiatlon'>Github profile</a></li>
                <li><span>Hello, the website was created for the visual purpose only.</span></li>
            </ul>
        </div>
    );
}

export default ContactView;