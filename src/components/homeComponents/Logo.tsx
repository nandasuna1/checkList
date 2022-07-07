import { CheckCircle } from "phosphor-react";
import styles from './Logo.module.scss'
export function Logo() {
    return (
        <section className={styles.logo}>
          <CheckCircle size={60} color="#ffffff" weight='light'/>
        </section>
    )
}