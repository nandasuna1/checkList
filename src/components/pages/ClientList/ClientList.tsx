import React from "react";
import { Header } from "../../commons/Header";
import { ClientCard } from "./ClientCard";
import styles from './ClientList.module.scss'


export function ClientList() {
    return (
    <div className={styles.page}>
        <Header title='Clientes'/>
        <section className={styles.cards}>
            <ClientCard />
            <ClientCard />
        </section>
    </div>
    )
}