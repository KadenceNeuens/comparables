import React, { useEffect, useState } from 'react';
import styles from '../modules/OutputWindow.module.scss';
import { renderOutput } from '../utils/comparables/render.jsx'

export default function OutputWindow(props) {

    const [output, setOutput] = useState(null);

    useEffect(() => {
        console.log("Changed output", output)
        if (props.output !== null) setOutput(renderOutput(props.output));
    }, [props.output])
         
    return(
        
        <div className={styles.Wrapper}>
            { output === null ? 'To begin, choose a measurement type and unit, then input some data'
            :
            output }
        </div>
        
    )

}