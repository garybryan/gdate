import styles from './payment.module.css';

export function Payment() {
  return (
    <section className={styles['container']}>
      <h2>Don&apos;t stand up your date!!</h2>
      <div className={styles['content']}>
        <p>When and where is the meeting?</p>
        <p className={styles['premium']}><em>Become a <strong>premium member</strong> to find out!</em></p>
      </div>
    </section>
  );
}

export default Payment;
