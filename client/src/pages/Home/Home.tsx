import { FC, useState } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Button from "../../components/UI/Button/Button";
import SchoolRegistration from "./SchoolRegistration/SchoolRegistration";
import Header from "../../components/Header/Header";

import styles from "./home.module.scss";


const Home: FC = () => {

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <Modal visible={visible} setVisible={setVisible}>
                    <SchoolRegistration />
                </Modal>
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
                        <Button 
                            className={styles.mainInfo__button} 
                            onClick={() => setVisible(true)}
                        >
                            Реєстрація школи
                        </Button>
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