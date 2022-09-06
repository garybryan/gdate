import styles from './payment.module.css';

import PaymentOption from '../payment-option/payment-option';

export function Payment() {
  return (
    <section className={styles['container']}>
      <h2>Don&apos;t stand up your date!!</h2>
      <div className={styles['content']}>
        <p>When and where are you meeting?</p>
        <p className={styles['premium']}><em>Become a <strong>premium member</strong> to find out!</em></p>
      </div>
      <div className={styles['options']}>
        <PaymentOption />
      </div>
    </section>
  );
}

export default Payment;
