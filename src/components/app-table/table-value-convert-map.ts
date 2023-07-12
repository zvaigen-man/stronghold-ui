import { ColType } from "../../models";

// const convertMap: { [key in ColType]: (obj: any, propString: string) => string } = {
export const convertMap: Record<ColType, (obj: any, propString: string) => string> = {

    text: getPropsByString,
    number: getPropsByString,
    duration: getPropsByString,
    name: getPropsByString,
    date: getPropsByString,
    toFixed: (obj: any, propString: string) => getPropsByString(obj, propString)?.toFixed(2),
    upperCase: (obj: any, propString: string) => getPropsByString(obj, propString)?.toUpperCase(),
}

function getPropsByString(obj: any, propString: string) {
    if (!propString) {
        throw obj
    }
    const props: string[] = propString.split('.');
    let prop;
    let i: number, iLen: number;
    for (i = 0; iLen = props.length - 1; i++) {
        prop = props[i];
        const candidate = props[obj];
        if (candidate != undefined) {
            obj = candidate;
        } else {
            break;
        }

    }
    return obj[props[i]]
};