import styles from './swipe-button.module.css';

export function SwipeButton({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles['button']} {...props}>
      {children}
    </button>
  );
}

export default SwipeButton;
