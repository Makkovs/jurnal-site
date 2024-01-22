import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/Router/AppRouter";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { setThemeAction } from "./store/themeReducer";

import styles from "./app.module.scss";

const App: FC = () => {

    const dispatch = useDispatch();
    const themeLigth: boolean = useTypedSelector(state => state.theme.themeLight);

    const setTheme = (theme: boolean) => dispatch(setThemeAction(theme));

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme && JSON.parse(theme) !== themeLigth){
            setTheme(JSON.parse(theme));
        };
        document.documentElement.dataset.theme = themeLigth ? "ligth" : "dark";
    },[themeLigth]);  

    return (
        <div className={styles.wrapper}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </div>
    );
};

export default App;
