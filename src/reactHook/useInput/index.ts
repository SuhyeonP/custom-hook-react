// todo type string, number 에서만 가능한거라서 다른 인풋에 대해서 예외처리 생각하기
import React, {Dispatch, SetStateAction, useCallback, useState} from "react";
import {SetStateType, TextOnChange} from "../typing";

export function useInput<T>(initialValue: T, maxLength = Infinity): [T, TextOnChange, SetStateType<T>]  {
    const [value, setValue] = useState<T>(initialValue);
    const handler = useCallback(e => {
        if (e.target.value.length <= maxLength) {
            setValue(e.target.value);
        }
    }, []);
    return [value, handler, setValue];
}
