import { FC } from "react";

import styles from "./checkbox.module.scss";

interface CheckboxProps {
    className?: string;
    onClick?: (...args: any[]) => void;
}

const Checkbox: FC<CheckboxProps> = ({className = "", onClick}) => {

    return (
        <div className={[styles.checkbox, className].join(" ")} onClick={onClick}>
            
        </div>
    );
};

export default Checkbox;