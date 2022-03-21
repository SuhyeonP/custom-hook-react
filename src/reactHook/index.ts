import React, {useState, useCallback, Dispatch, SetStateAction, DependencyList, EffectCallback, useEffect} from 'react';

export function useInput<T>(initialValue: T, maxLength = Infinity): [T, (e: React.FormEvent) => void, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(initialValue);
    const handler = useCallback(e => {
        if (e.target.value.length <= maxLength) {
            setValue(e.target.value);
        }
    }, []);
    return [value, handler, setValue];
}

const wildCard = new RegExp(/.*/g);

export function useErrorInput(initialValue: string, regEx: RegExp =wildCard, maxLength = Infinity): [string, (e: React.FormEvent) => void, Dispatch<SetStateAction<string>>, boolean] {
    const [value, setValue] = useState<string>(initialValue);
    const [error, setError] = useState<boolean>(false);

    const handler = useCallback(e => {
        if (e.target.value.length <= maxLength && regEx.test(value)) {
            setValue(e.target.value)
            if(error) {
                setError(false);
            }
        } else {
           setError(true) ;
        }
    },[error])

    return [value, handler, setValue, error];
}

// // const [v, setV] = useState(true);
// // ex: const debounceValue = useDebounceValue(value, 500);
// // useEffect  - deps [debounceValue], if(debounceValue){if(scenario){ setV(false) } else { setV(true)}}
// export function useDebounceValue<T>(inputValue: T, delay: number): T {
//     const [value, setValue] = useState(inputValue);
//
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setValue(value);
//         }, delay);
//
//         return () => {
//             clearTimeout(timer);
//         }
//     }, [inputValue]);
//
//     return value;
// }
//
//
// export function useDebounceFunction (func: any, delay: number): (...args: any) => void {
//     let timeOut: any;
//
//     return (...args: any) => {
//         const context = this;
//         if (timeOut) clearTimeout(timeOut);
//         timeOut = setTimeout(() => {
//             timeOut = null;
//             func.apply(context, args); // when exist this context
//         },delay)
//     }
// }
//
// interface RenderFrame<Fn> {
//     (cb: Fn | (() => void), timeStart?: number): FrameRequestCallback;
// }
//
// type Args = any[];
//
// const defaultDeps: DependencyList = [];
//
// export function useDebounceDeps (fn: EffectCallback) {
//
// }
