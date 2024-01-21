import styles from "./input.module.scss";

type Props = {
    title: string;
    onChange?: (value: string) => void;
    width?: string;
}

const Input = ({ width, title, onChange }: Props) => {
    return <div className={styles["input-effect"]} style={{ width }}>
        <input onChange={(event) => onChange && onChange(event.target.value)} id={`input-${title}`} className={styles["effect-20"]} type="text" placeholder="" />
        <label htmlFor={`input-${title}`}>{title}</label>
        <span className={styles["focus-border"]}>
            <i></i>
        </span>
    </div>
}

export { Input }
