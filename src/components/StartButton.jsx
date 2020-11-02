import React from 'react';
import { animated, useSpring } from 'react-spring';
import styles from '../modules/Button.module.scss';
import colors from '../utils/colors';

export default function StartButton(props) {

    function startApp() {
        props.startApp();
    }

    const [ButtonColor, setColor] = useSpring(()=>({
        backgroundColor: colors.colorPrimary0,
    }))

    return (
        <div style={{maxWidth: "100%"}}onClick={startApp}>
            <animated.div 
                className={styles.Button}
                style={ButtonColor}
                onMouseEnter={() => setColor({ backgroundColor: colors.colorPrimary3})}
                onMouseLeave={() => setColor({ backgroundColor: colors.colorPrimary0})}
            >
                Get Started
            </animated.div>
        </div>
    )

}