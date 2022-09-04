import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles['header']}>
      <h1 className={styles['headerText']}>gdate</h1>
    </header>
  );
}

export default Header;
