import React from 'react';
import Canvas from './Canvas';

import LakePaths from './LakePaths';

import { drawPercentFill } from '../../canvasDrawHelpers';

export function renderGreatLakes(input)
{
    console.log("renderGreatLakes", input);

    const output = []

    for(let item in input)
    {
        output.push(item);
    }
    
    function drawLakeMichigan(ctx) 
    { drawPercentFill(ctx, LakePaths.LakeSuperior, input['LakeMichigan'], -60, -215, "#0000FF", "#000000") }

    function drawLakeSuperior(ctx) 
    { drawPercentFill(ctx, LakePaths.LakeSuperior, input['LakeSuperior'], -60, -215, "#0000FF", "#000000") }

    function drawLakeHuron(ctx) 
    { drawPercentFill(ctx, LakePaths.LakeSuperior, input['LakeHuron'], -60, -215, "#0000FF", "#000000") }

    function drawLakeOntario(ctx) 
    { drawPercentFill(ctx, LakePaths.LakeSuperior, input['LakeOntario'], -60, -215, "#0000FF", "#000000") }

    function drawLakeErie(ctx) 
    { drawPercentFill(ctx, LakePaths.LakeSuperior, input['LakeErie'], -60, -215, "#0000FF", "#000000") }

    return(
        output.map((item, index) => {
            switch(item)
            {
                case "LakeMichigan":
                    return <div>{item}, {input[item]*100}{"%"} <Canvas draw={drawLakeMichigan} width='600' height='300'/></div>
                case "LakeSuperior":
                    return <div>{item}, {input[item]*100}{"%"} <Canvas draw={drawLakeSuperior} width='600' height='300'/></div>
                case "LakeHuron":
                    return <div>{item}, {input[item]*100}{"%"} <Canvas draw={drawLakeHuron} width='600' height='300'/></div>
                case "LakeOntario":
                    return <div>{item}, {input[item]*100}{"%"} <Canvas draw={drawLakeOntario} width='600' height='300'/></div>
                case "LakeErie":
                    return <div>{item}, {input[item]*100}{"%"} <Canvas draw={drawLakeErie} width='600' height='300'/></div>
                default:
                    return <div>{item}, {input[item]}</div>
            }
        })
    )
}