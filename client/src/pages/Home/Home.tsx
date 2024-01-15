import { FC } from "react";
import { Link } from "react-router-dom";

import { SCHOOL_REGISTRATION_ROUTE } from "../../utils/consts";

import styles from "./home.module.scss";

const Home: FC = () => {

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__element}>
                    <h1>StudyScribe</h1>
                </div>
                <div className={styles.header__element}>
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
            <main className={styles.main}>
                <article>
                    <section className={styles.mainInfo}>
                        <span className={styles.mainInfo__title}>
                            електронний щоденник та журнал
                        </span>
                        <p className={styles.mainInfo__text}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
                            consequatur sint totam libero velit cum cupiditate soluta ad culpa?
                            Illo repellendus fugit facilis aliquid neque eos necessitatibus eius.
                            Eius provident enim eos vel velit id quos fugit incidunt iusto a. Mollitia
                            atque odit vel quibusdam placeat labore reprehenderit consequatur. Neque
                            porro eos officiis delectus nostrum in. Fugiat voluptates quibusdam
                            corporis laboriosam, voluptate maiores accusantium. Consectetur, explicabo
                            sint? Veniam, libero quos!
                        </p>
                        <Link
                            className={styles.mainInfo__button}
                            to={SCHOOL_REGISTRATION_ROUTE}
                        >
                            Реєстрація школи
                        </Link>
                    </section>
                    <section className={styles.info}>
                        <span className={styles.info__title}>
                            можливості сервісу StudyScribe
                        </span>
                        <div className={styles.info__possibility}>
                            <div className={styles.info__can}>
                                <img className={styles.info__possibility__img} src="./book.png" alt="" />
                                <div className={styles.info__can__title}>
                                    Щоденник
                                </div>
                            </div>
                            <div className={styles.info__can}>
                                <img className={styles.info__possibility__img} src="./book.png" alt="" />
                                <div className={styles.info__can__title}>
                                    Відвідуваність
                                </div>
                            </div>
                            <div className={styles.info__can}>
                                <img className={styles.info__possibility__img} src="./book.png" alt="" />
                                <div className={styles.info__can__title}>
                                    Домашні завдання
                                </div>
                            </div>
                            <div className={styles.info__can}>
                                <img className={styles.info__possibility__img} src="./book.png" alt="" />
                                <div className={styles.info__can__title}>
                                    Звіти
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
};

export default Home;