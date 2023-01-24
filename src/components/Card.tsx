import { ReactNode } from "react";
import styles from "./Card.module.css";

// Children são os componentes que vão dentro de outro
export function Card(props: { title: string, children: ReactNode }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
}