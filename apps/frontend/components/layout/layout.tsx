import Header from '../header/header';

import styles from './layout.module.css';

export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles['container']}>
      <Header />
      <main className={styles['main']}>{children}</main>
    </div>
  );
}

export default Layout;
