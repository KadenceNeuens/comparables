/*
 *  Volume.js
 *
 *  Kadence Neuens, 2020
 *
 */

import * as math from 'mathjs';
import { convert } from '../comparable';
//import UnitNames from '../measureUnitMathjsNames.json';

import greatLakes from './greatLakes.json';

export function compareVolume(value, unit)
{
    let output = {};
    output["greatLakes"] = compareGreatLakes(value, unit);

    return output;
}

function compareGreatLakes(value, unit)
{
    let output = {};
    let convertedValue = convert(value, unit, "Liters");
    for(var item in greatLakes)
    {
        let percentVolume = convertedValue/greatLakes[item].liters;
        output[item] = math.round(percentVolume,4);
    }
    console.log("output pre return", output)
    return output;
}