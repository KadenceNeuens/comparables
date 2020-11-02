import React from 'react';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styles from '../modules/InputMenu.module.scss';
import buttonStyle from '../modules/Button.module.scss';
import colors from '../utils/colors';

import backArrow from '../icons/chevron-left.svg';

import types from '../utils/measureTypes.json';
import units from '../utils/measureUnits.json';

import {compare, convert} from '../utils/comparable';

export default function InputMenu(props) {

    // STATE
    const [closing, setClosing] = useState(false);

    const [measureType, setMeasureType] = useState(types[0]);
    const [measureUnit, setMeasureUnit] = useState(units[0][0]);

    const [input, setInput] = useState();

    // HANDLERS
    const onTypeChange = e => {
        const selectedType = e.target.value;
        setMeasureType(selectedType);
        setMeasureUnit(units[types.indexOf(selectedType)][0]);
    }

    const onUnitChange = e => {
        const selectedUnit = e.target.value;
        if (input !== undefined) setInput(convert(input, measureUnit, selectedUnit));
        setMeasureUnit(selectedUnit);
    }

    const handleInput = e => {
        const inputValue = e.target.value;
        setInput(inputValue);
    }

    const processInput = () => {
        console.log("Compare",compare(measureType, measureUnit, input));
        props.setOutput(compare(measureType, measureUnit, input));
    }

    function closeApp() {
        setClosing(true);
        setBackAnimation({opacity: 0});
        props.startApp(false);
    }

    // SPRING ANIMATIONS
    const [backAnimation, setBackAnimation] = useSpring(()=>
        ({
            transform: "scale(1.0)",
            opacity: 0.8
        })
    )

    const [ButtonColor, setColor] = useSpring(()=>({
        backgroundColor: colors.colorPrimary0,
    }))

    // RENDER
    return(
        <div className={styles.Body}>
            {/* Title Bar */}
            <div className={styles.TitleBar}>
                <animated.div 
                className={styles.BackButton} 
                style={backAnimation}
                onClick={closeApp}
                onMouseEnter={closing ? null : ()=>setBackAnimation({transform: "scale(0.9)", opacity: 0.9})}
                onMouseLeave={closing ? null : ()=>setBackAnimation({transform: "scale(1.0)", opacity: 0.8})}
                >
                    <img src={backArrow} alt="Navigate Back Icon"/>
                </animated.div>
                <div className={styles.Title}>Measure Input</div>
            </div>

            {/* Measurement Type Select Dropdown */}
            <div className={styles.MenuItem}>
                <label>Type:</label>
                <select onChange={onTypeChange} value={measureType}>
                    {types.map((item, key) => (
                        <option value={item} key={key}>{item}</option>
                    ))}
                </select>
            </div>

            {/* Measurement Unit Select Dropdown */}
            <div className={styles.MenuItem}>
                <label>Units:</label>
                <select onChange={onUnitChange} value={measureUnit}>
                    {units[types.indexOf(measureType)].map((item, key) => (
                        <option value={item} key={key}>{item}</option>
                    ))}
                </select>
            </div>

            {/* Input Field */}
            <div className={styles.MenuItem}>
                <input type="number" value={input} placeholder="Enter value..." onChange={handleInput}/>
                <span>{measureUnit}</span>
            </div>

            {/* Process Input Button */}
            <div className={styles.MenuItem}>
                <animated.div
                className={buttonStyle.Button}
                onClick={processInput}
                style={ButtonColor}
                onMouseEnter={() => setColor({ backgroundColor: colors.colorPrimary3})}
                onMouseLeave={() => setColor({ backgroundColor: colors.colorPrimary0})}
                >
                    Calculate
                </animated.div>
            </div>

        </div>
    )

}