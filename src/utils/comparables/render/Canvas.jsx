import React, { useRef, useEffect } from 'react';

export default function Canvas(props)
{
    const {draw, ...other} = props;
    const canvasRef = useRef(null)

    useEffect(() =>
    {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        draw(context);
    }
    ,[draw])

    return(
        <canvas ref={canvasRef} {...other}/>
    )
}