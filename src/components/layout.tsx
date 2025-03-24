import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.header}>Next.js ブログアプリケーション</h2>
        {children}
      </div>
    </>
  );
}
