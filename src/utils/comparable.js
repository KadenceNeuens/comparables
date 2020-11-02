/*
 *  Comparable.js
 *
 *  Kadence Neuens, 2020
 *
 */

import * as math from 'mathjs';
import UnitNames from './measureUnitMathjsNames.json';

import * as Volume from './comparables/Volume';

export function compare (type, unit, value)
{
    switch(type)
    {
        case "Length":
            alert("Length " + value + unit)
            break;
        case "Volume":
            return Volume.compareVolume(value, unit);
        case "Weight":
            alert("Weight " + value + unit)
            break;
        case "Mass":
            alert("Mass " + value + unit)
            break;
        case "Temperature":
            alert("Temperature " + value + unit)
            break;
        case "Time":
            alert("Time " + value + unit)
            break;
        case "Brightness":
            alert("Brightness " + value + unit)
            break;
        default:
            alert("An unexpected error occured...");
    }
}

export function convert (value, fromUnit, toUnit)
{
    let from = math.unit(value, UnitNames[fromUnit]);
    let conversion = from.toNumber(UnitNames[toUnit]);
    return conversion;
}