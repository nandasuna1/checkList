import React from "react";
import styles from  './DefaultButton.module.scss'


interface ButtonProps {
    title: string
}
export function DefaultButton(props: ButtonProps) {

    const {title} = props
    return (
        <button className={styles.button}>{title}</button>
    )
}