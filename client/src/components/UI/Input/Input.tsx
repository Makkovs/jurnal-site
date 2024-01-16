import { FC } from "react";

import styles from "./input.module.scss";

interface InputProps {
    type?: string;
    placeholder?: string;
    className?: string;
    value?: string | number;
    onChange?: (...args: any[]) => void;
}

const Input: FC<InputProps> = (
    { type = "text", placeholder, className = "", value, onChange}
) => {
    return (
        <input
            className={[styles.input, className].join(" ")}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;