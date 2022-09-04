import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles['header']}>
      <h1>gdate</h1>
    </header>
  );
}

export default Header;
