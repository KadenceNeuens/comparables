import React from 'react';
import Canvas from './Canvas';

import LakePaths from './LakePaths';

export function renderGreatLakes(input)
{
    console.log("renderGreatLakes", input);

    const output = []

    for(let item in input)
    {
        output.push(item);
    }
    
    function drawLakeSuperior(ctx)
    {
        ctx.save();

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        let p = new Path2D(LakePaths.LakeSuperior)
        ctx.translate(-60,-215);

        // Fill initial shape fully
        ctx.fillStyle = "#0000FF"
        ctx.fill(p)

        ctx.restore();
        ctx.save();

        // Remove fill until correct percentage remains
        let original = ctx.getImageData(0,0,ctx.canvas.width, ctx.canvas.height).data;
        let originalTotalPixels = getPixelTotal(original),
            currentPixels = originalTotalPixels,
            yOffset = 0,
            current;

            console.log("Image data",original);
            console.log("Goal Percent", input['LakeSuperior']);
        while(currentPixels/originalTotalPixels > input['LakeSuperior'])
        {
            ctx.clearRect(0,0,ctx.canvas.width, yOffset);
            current = ctx.getImageData(0,0,ctx.canvas.width, ctx.canvas.height).data;
            currentPixels = getPixelTotal(current);
            yOffset++;
            if (yOffset > ctx.canvas.height)
            {
                alert("Error, yOffset off canvas, Y offset: " + yOffset);
                break;
            }
            console.log("Current pixel percent", currentPixels/originalTotalPixels);
        }
        console.log("Completed!", currentPixels/originalTotalPixels);
        console.log(currentPixels);
        console.log(originalTotalPixels);

        // Draw outline over modified fill
        ctx.translate(-60,-215);
        ctx.stroke(p);
        ctx.restore();
    }

    function getPixelTotal(imageData)
    {
        let totalPixelCount = 0;
        for(let i = 0; i < imageData.length; i += 4)
        {
            if (imageData[i+3] > 0) totalPixelCount++;
        }
        console.log("TotalPixelCount",totalPixelCount)
        return totalPixelCount;
    }

    return(
        output.map((item, index) => {
            switch(item)
            {
                case "LakeSuperior":
                    return <div>{item}, {input[item]*100}{"%"} <Canvas draw={drawLakeSuperior} width='600' height='300'/></div>
                default:
                    return <div>{item}, {input[item]}</div>
            }
        })
    )
}