import React from "react";
import { DefaultButton } from "../../commons/buttons/DefaultButton";
import styles from './ClientCard.module.scss'


export function ClientCard() {
    return (
        <div className={styles.card}>
            <section>
                <header>Nome</header>
                <dd>Fulano</dd>
            </section>

            <section>
                <header>Produto</header>
                <dd>Seguro Auto</dd>
            </section>

            <section>
                <header>Vencimento</header>
                <dd>15/06/2022</dd>
            </section>

            <DefaultButton title="Veja Mais"/>
        </div>
    )
}