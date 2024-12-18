import styles from "./visually-hidden.module.css";

export function VisuallyHidden({ children }: { children: React.JSX.Element }) {
  return <span className={styles.visuallyHidden}>{children}</span>;
}
