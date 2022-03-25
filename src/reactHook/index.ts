import React, {useState, useCallback, Dispatch, SetStateAction, DependencyList, EffectCallback, useEffect} from 'react';
export { useInput } from './useInput'
export { useErrorInput, sampleRegExp } from './useErrorInput';
export * from './typing';

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
