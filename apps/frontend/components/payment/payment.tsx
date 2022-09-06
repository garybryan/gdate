import styles from './payment.module.css';

import PaymentOption from '../payment-option/payment-option';

export function Payment() {
  return (
    <section className={styles['container']}>
      <h2 className={styles['heading']}>Don&apos;t leave your date waiting!!</h2>
      <div className={styles['content']}>
        <p>When and where are you meeting?</p>
        <p className={styles['premium']}>
          <em>
            Become a <strong>Premium Member</strong>
            <br />
            and find out!
          </em>
        </p>
      </div>
      <div className={styles['options']}>
        <PaymentOption name="Weekly" price="70" period="week" />
        <PaymentOption name="Monthly" price="200" period="month" />
        <PaymentOption name="Forever" price="1,000" period="eternity" />
      </div>
    </section>
  );
}

export default Payment;
