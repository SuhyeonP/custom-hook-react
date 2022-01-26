import React, {useState, useCallback, Dispatch, SetStateAction} from 'react';

export function useInput<T>(initialValue: T, maxLength = Infinity): [T, (e: React.FormEvent) => void, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(initialValue);
    const handler = useCallback(e => {
        if (e.target.value.length <= maxLength) {
            setValue(e.target.value);
        }
    }, []);
    return [value, handler, setValue];
}