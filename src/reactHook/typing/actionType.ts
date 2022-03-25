import React, {Dispatch, SetStateAction} from "react";

export type TextOnChange = (e: React.FormEvent) => void;
export type SetStateType<T> = Dispatch<SetStateAction<T>>;
