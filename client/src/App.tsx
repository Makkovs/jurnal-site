import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/AppRouter";

import styles from "./app.module.scss";

const App: FC = () => {

    return (
        <div className={styles.wrapper}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </div>
    );
};

export default App;
