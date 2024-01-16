import { FC, useState } from "react";

import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";

import styles from "./school-registration.module.scss";

const SchoolRegistration: FC = () => {

    const [schoolName, setSchoolName] = useState<string>("");

    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [surname, setSurname] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [fatherName, setFatherName] = useState<string>("");

    const [errorMessage, setErrorMessage] = useState<string>("");

    const registration = (): void => {
        if (!schoolName || !name || !fatherName){
            setErrorMessage("Вкажіть ваш ПІБ та назву навчального закладу.");
            return;
        };
        if (login.length < 4){
            setErrorMessage("Логін має містити хоча б 4 символи.");
            return;
        };
        if (password.length < 8){
            setErrorMessage("Пароль має містити хоча б 8 символів.");
            return;
        };
        setErrorMessage("");
    };

    return (
        <section className={styles.body}>
            <h2 className={styles.title}>Реєстрація навчального закладу</h2>
            <h3>Назва навчального закладу</h3>
            <Input
                className={styles.input}
                type="text"
                value={schoolName}
                onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => setSchoolName(e.target.value)
                }
            />
            <h2 className={styles.title}>Реєстрація аккаунту куратора</h2>
            <h3>Логін</h3>
            <Input
                className={styles.input}
                type="text"
                value={login}
                onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)
                }
            />
            <h3>Пароль</h3>
            <Input
                className={styles.input}
                type="text"
                value={password}
                onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
                }
            />
            <div className={styles.curator_name}>
                <div>
                    <h3>Прізвище</h3>
                    <Input
                        className={[styles.input, styles.input_name].join(" ")}
                        type="text"
                        value={surname}
                        onChange={
                            (e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)
                        }
                    />
                </div>
                <div>
                    <h3>Ім'я</h3>
                    <Input
                        className={[styles.input, styles.input_name].join(" ")}
                        type="text"
                        value={name}
                        onChange={
                            (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
                        }
                    />
                </div>
                <div>
                    <h3>По батькові</h3>
                    <Input
                        className={[styles.input, styles.input_name].join(" ")}
                        type="text"
                        value={fatherName}
                        onChange={
                            (e: React.ChangeEvent<HTMLInputElement>) => setFatherName(e.target.value)
                        }
                    />
                </div>
            </div>
            <span className={styles.errorMessage}>{errorMessage}</span>
            <Button onClick={registration}>
                Зареєструватись
            </Button>
        </section>
    );
};

export default SchoolRegistration;