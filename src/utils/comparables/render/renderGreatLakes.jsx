import React from 'react';

export function renderGreatLakes(input)
{
    console.log("renderGreatLakes", input);

    const output = []

    for(let item in input)
    {
        output.push(item);
    }
    
    return(
        output.map((item, index) => {
            switch(item)
            {
                case "LakeSuperior":
                    return <div>{item}, {input[item]} Lake Superior</div>
                default:
                    return <div>{item}, {input[item]}</div>
            }
        })
    )
}