import { FC } from "react";
import { useDispatch } from "react-redux";

import { setThemeAction } from "../../store/themeReducer";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import Checkbox from "../UI/Checkbox/Checkbox";
    
import styles from "./header.module.scss";

const Header: FC = () => {

    const dispatch = useDispatch();
    const themeLigth: boolean = useTypedSelector(state => state.theme.themeLight);

    const setTheme = (theme: boolean) => dispatch(setThemeAction(theme));

    return (
        <header className={styles.header}>
            <div className={styles.header__element}>
                <h1>StudyScribe</h1>
            </div>
            <div className={styles.header__element}>
                <Checkbox
                    className={styles.themeCheckbox}
                    onClick={() => setTheme(!themeLigth)}
                />
                <nav className={styles.nav}>
                    <span className={[styles.nav__link, styles.nav__link_selected].join(" ")}>
                        Головна
                    </span>
                    <span className={styles.nav__link}>
                        Щоденник
                    </span>
                    <span className={styles.nav__link}>
                        Розклад
                    </span>
                    <span className={styles.nav__link}>
                        Увійти
                    </span>
                </nav>
            </div>
        </header>
    );
};

export default Header;