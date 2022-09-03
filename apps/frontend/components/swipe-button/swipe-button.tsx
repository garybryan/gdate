import styles from './swipe-button.module.css';

interface SwipeButtonProps {
  children: React.ReactNode
}

export function SwipeButton({ children }: SwipeButtonProps) {
  return (
    <button className={styles['button']}>{children}</button>
  );
}

export default SwipeButton;
