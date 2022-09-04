import { UserProvider } from '../../contexts/user-context';

import Header from '../header/header';

import styles from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles['container']}>
      <UserProvider>
        <Header />
        <main className={styles['main']}>{children}</main>
      </UserProvider>
    </div>
  );
}

export default Layout;
