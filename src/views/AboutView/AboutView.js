import React from 'react';
import styles from './AboutView.module.scss';
import NoteWithImg from '../../components/NoteWithImage/NoteWithImg';

import caffeeBags from '../../assets/images/popular-coffee-bags.png';
import caffeeHeart from '../../assets/images/pexels-chevanon-photography-302899.jpg';
import coffeBreakfast from '../../assets/images/coffeBreakfast.jpg';

const AboutView = () => {
    return(
        <div className={styles.wrapper}>
            <NoteWithImg 
                title="Coffee Bags" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris ultrices. Sed risus pretium quam vulputate dignissim suspendisse in est. Donec et odio pellentesque diam. Massa ultricies mi quis hendrerit dolor magna eget. Non sodales neque sodales ut etiam sit amet." 
                img={caffeeBags} 
                rotation="right"
            />
            <NoteWithImg 
                title="Coffee Heart" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus arcu bibendum at. Facilisi cras fermentum odio eu." 
                img={caffeeHeart} 
                rotation="left"
            />
            <NoteWithImg 
                title="Coffee Breakfast" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl nunc. Mattis molestie a iaculis at erat pellentesque. Elit at imperdiet dui accumsan sit amet. Aliquam id diam maecenas ultricies mi eget. Condimentum mattis pellentesque id nibh tortor id. Viverra mauris in aliquam sem fringilla. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus." 
                img={coffeBreakfast} 
                rotation="right"
            />
        </div>
    );
}

export default AboutView;