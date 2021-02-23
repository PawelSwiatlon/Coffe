import React from 'react';
import styles from './NoteWithImg.module.scss';

const NoteWithImg = (props) => {
    if(props.rotation === 'right'){
        return(
            <div className={styles.context}>
                <div className={styles.coffeBags}>
                    <img src={props.img} alt="Img Error" />
                </div>
                <span>
                    <h1>{props.titleBlack}<a>{props.titleOrange}</a></h1>
                    <p>{props.description}</p>
                </span>
            </div>
        );
    }else {
        return(
            <div className={styles.context}>
                <span>
                    <h1>{props.titleBlack}<a>{props.titleOrange}</a></h1>
                    <p>{props.description}</p>
                </span>
                <div className={styles.coffeBags}>
                    <img src={props.img} alt="Img Error" />
                </div>
            </div>
        );
    }
}
export default NoteWithImg;