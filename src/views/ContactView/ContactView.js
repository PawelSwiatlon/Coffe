import React from 'react';

import styles from './ContactView.module.scss';
const git = 'https://github.com/PawelSwiatlon';

const ContactView = () => {
    return(
        <div className={styles.wrapper}>
            <h1>Contact<span>:</span></h1>
            <ul>
                <li>Email: pswiatlon02@gmail.com</li>
                <li>Git: <a href={git}>Github profile</a></li>
                <li><span>Hello, the website was created for the visual purpose only.</span></li>
            </ul>
        </div>
    );
}

export default ContactView;