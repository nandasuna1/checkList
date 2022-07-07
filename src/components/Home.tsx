import React from "react";
import styles from './Home.module.scss'
import { Logo } from "./homeComponents/Logo";
import { Menu } from "./homeComponents/Menu";
import { ClientList } from "./pages/ClientList/ClientList";


export function Home(){
    return (
        <div className={styles.home}>
            <Logo />
            <main className={styles.main}>
                <Menu/>
                <div className={styles.mainDiv}>
                    <ClientList />
                </div>
            </main>
        </div>
    )
}