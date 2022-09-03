import styles from './layout.module.css';

export interface LayoutProps {
  children?: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles['container']}>
      <header className={styles['header']}>
        <h1>gdate</h1>
      </header>
      <main className={styles['main']}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
