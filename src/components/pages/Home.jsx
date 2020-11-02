import React, { useEffect } from 'react';
import { useState } from 'react';
import { animated, useTransition } from 'react-spring';

import HomeHeader from '../HomeHeader';
import Info from '../Info';
import InputMenu from '../InputMenu';
import OutputWindow from '../OutputWindow';

export default function Home() {

    const [output, setOutput] = useState(null);

    const [showInputMenu, setShowInputMenu] = useState(false);
    const [showOutputWindow, setShowOutputWindow] = useState(false);

    const inputMenuTransitions = useTransition(showInputMenu, null, {
        from: { boxShadow: "1px 0px 8px 0px black", overflow: "hidden", position: "fixed", right: "0%", height: "100vh", width: "0vw" },
        enter: [{ width: "100vw" }, { width: "40vw", right: "60%" }],
        leave: { width: "0vw", right: "100%" },
    });


    const outputWindowTransitions = useTransition(showOutputWindow, null, {
        from: { overflow: "hidden", position: "fixed", right: "0%", height: "100vh", width: "0vw" },
        enter: [{ width: "100vw" }, { width: "60vw" }],
        leave: { width: "0vw" },
    });

    useEffect(() => {
        setShowOutputWindow(showInputMenu);
    }, [showInputMenu]);

    useEffect(()=> {
        console.log("output",output)
    },[output])

    return (
        <>
            {outputWindowTransitions.map(({ item, key, props}) =>
            item &&
                <animated.div key={key} style={props}>
                    <OutputWindow output={output}/>
                </animated.div>
            )}

            {
            inputMenuTransitions.map(({ item, key, props }) =>
            item && 
                <animated.div key={key} style={props}>
                    <InputMenu startApp={setShowInputMenu} setOutput={setOutput}/>
                </animated.div>
            )}
            
            <HomeHeader startApp={setShowInputMenu}/>
            <Info/>
        </>
    )

}