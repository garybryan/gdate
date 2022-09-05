import Avatar from '@mui/material/Avatar';

import { useUser } from '../../hooks/user/user';

import styles from './header.module.css';

export function Header() {
  const { user } = useUser();

  return (
    <header className={styles['header']}>
      <h1 className={styles['header-text']}>gdate</h1>
      {user && (
        <Avatar
          className={styles['avatar']}
          alt={user.name}
          src={`/profile-photos/${user.photo}`}
        />
      )}
    </header>
  );
}

export default Header;
