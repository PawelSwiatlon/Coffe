import React from 'react';

import styles from './AboutView.module.scss';
import caffeeBags from '../../assets/images/popular-coffee-bags.png';
import caffeeHeart from '../../assets/images/pexels-chevanon-photography-302899.jpg';
import coffeBreakfast from '../../assets/images/coffeBreakfast.jpg';

const AboutView = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.context}>
                <div className={styles.coffeBags}>
                    <img src={caffeeBags} alt="Img Error" />
                </div>
                <span>
                    <h1>Coffee Bags</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris ultrices. Sed risus pretium quam vulputate dignissim suspendisse in est. Donec et odio pellentesque diam. Massa ultricies mi quis hendrerit dolor magna eget. Non sodales neque sodales ut etiam sit amet.</p>
                </span>
            </div>
            <div className={styles.context}>
                <span>
                    <h1>Coffee Heart</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus arcu bibendum at. Facilisi cras fermentum odio eu.</p>
                </span>
                <div className={styles.coffeBags}>
                    <img src={caffeeHeart} alt="Img Error" />
                </div>
            </div>
            <div className={styles.context}>
                <div className={styles.coffeBags}>
                    <img src={coffeBreakfast} alt="Img Error" />
                </div>
                <span>
                    <h1>Coffee Breakfast</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl nunc. Mattis molestie a iaculis at erat pellentesque. Elit at imperdiet dui accumsan sit amet. Aliquam id diam maecenas ultricies mi eget. Condimentum mattis pellentesque id nibh tortor id. Viverra mauris in aliquam sem fringilla. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus.</p>
                </span>
            </div>
        </div>
    );
}

export default AboutView;