export function drawPercentFill(ctx, pathData, percent, offsetX = 0, offsetY = 0, fillColor, strokeColor)
{
    // Save pre-offset state & set offset
    ctx.save();
    ctx.translate(offsetX, offsetY);

    let p = new Path2D(pathData)

    if ( percent !== 0 )
    {
        // Fill initial shape fully
        if(fillColor !== undefined) ctx.fillStyle = fillColor
        ctx.fill(p)

        // Restore pre-offset draw & save new pre-offset state
        ctx.restore();
        ctx.save();

        if ( percent !== 100 )
        {
            // getImageData of original state and set up vars for next step
            let original = ctx.getImageData(0,0,ctx.canvas.width, ctx.canvas.height).data,
                originalTotalPixels = getPixelTotal(original),
                currentPixels = originalTotalPixels,
                yOffset = 0,
                current;

            // Remove fill until correct percentage remains
            while(currentPixels/originalTotalPixels > percent)
            {
                ctx.clearRect(0,0,ctx.canvas.width, yOffset);
                current = ctx.getImageData(0,0,ctx.canvas.width, ctx.canvas.height).data;
                currentPixels = getPixelTotal(current);
                yOffset++;
            }
        }
    }

    // Draw outline over modified fill
    ctx.translate(offsetX, offsetY);
    if(strokeColor !== undefined) ctx.strokeStyle = strokeColor;
    ctx.stroke(p);

    // Restore pre-offset draw
    ctx.restore();
}

function getPixelTotal(imageData)
{
    let totalPixelCount = 0;
    for(let i = 0; i < imageData.length; i += 4)
    {
        if (imageData[i+3] > 0) totalPixelCount++;
    }
    return totalPixelCount;
}