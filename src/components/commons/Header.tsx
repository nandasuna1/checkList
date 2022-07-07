import React from "react";
import styles from './Header.module.scss'

interface HeaderProps {
    title: string
    subtitle?: string
}
export function Header(props:HeaderProps) {
    const { title, subtitle } = props;

    return (
        <div className={styles.header}>
            <h1>{title}</h1>
            <dd>{subtitle}</dd>
        </div>
    )
}