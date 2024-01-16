import { FC, PropsWithChildren } from "react";

import styles from "./button.module.scss";

interface ButtonProps extends PropsWithChildren {
    className?: string;
    onClick?: (...args: any[]) => void;
}

const Button: FC<ButtonProps> = ({ className, onClick, children }) => {

    return (
        <div
            className={[styles.button, className].join(" ")}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Button;