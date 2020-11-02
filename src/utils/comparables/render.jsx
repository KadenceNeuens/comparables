import React from 'react';
import { renderGreatLakes } from './render/renderGreatLakes.jsx';

export function renderOutput(input)
{
    var output = [];
    for(let item in input)
    {
        switch(item)
        {
            case "greatLakes" :
                output.push(renderGreatLakes(input[item]))
                break;
            default:
                console.log("Error! Switch case in render.jsx defaulted with no matching case");
        }
    }
    return (
    <div>
        {output.map((item, index) => 
            <div>{item}</div>
        )}
    </div>
    )
}