import React from 'react';
import styles from '../modules/Header.module.scss';
import StartButton from './StartButton';

export default function HomeHeader(props) {

    function startApp() {
        props.startApp(true);
    }

    return (
        <div className={styles.Header}>
            
            <div className={styles.HeaderText}>
                <div className={styles.HeaderTitle}>Comparables</div>
                <div className={styles.HeaderCaption}>Easily find comparisons for measurement data</div>
            </div>
            
            <StartButton startApp={startApp}/>

        </div>
    )

}