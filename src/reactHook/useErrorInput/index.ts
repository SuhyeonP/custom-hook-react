import { useCallback, useState} from "react";
import {SetStateType, TextOnChange} from "../typing";

const wildCard = new RegExp(/.*/g);

const support = {
    email: 'email',
    phone_number: 'phone_number',
    onlyKo: 'onlyKo',
    onlyEng: 'onlyEng',
    onlyNum: 'onlyNum',
    wildCard: 'wildCard'
}

type SupportRegExpType = keyof typeof support;

export const sampleRegExp: Record<SupportRegExpType, RegExp> = {
    email: new RegExp(
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    ),
    phone_number: new RegExp(/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/),
    onlyKo: new RegExp(/^[가-힣]+$/),
    onlyEng: new RegExp(/^[a-zA-Z]+$/),
    onlyNum: new RegExp(/^[0-9]+$/),
    wildCard
}

export function useErrorInput(initialValue: string, regEx: RegExp | SupportRegExpType = wildCard, maxLength = Infinity): [string, TextOnChange, SetStateType<string>, boolean] {
    const [value, setValue] = useState<string>(initialValue);
    const [error, setError] = useState<boolean>(false);
    const req: RegExp = typeof regEx === 'string' ? sampleRegExp[regEx] : regEx;

    const handler = useCallback(e => {
        if (e.target.value.length <= maxLength) {
            setValue(e.target.value);

            setError(!req.test(e.target.value.toString()));
        } else {
            setError(true);
        }
    },[value])

    return [value, handler, setValue, error];
}

// export function useCheckError(initialValue: string, regEx: RegExp | SupportRegExpType = wildCard): [string, TextOnChange, boolean, SetStateType<boolean>, SetStateType<string>] {
//     const [value, setValue] = useState<string>(initialValue);
//     const [error, setError] = useState(false);
//     const req: RegExp = typeof regEx === 'string' ? sampleRegExp[regEx] : regEx;
//
//     const handler = useCallback((e) => {
//
//     },[])
// }
