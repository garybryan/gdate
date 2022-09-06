import Image from 'next/image';

import PaymentOption from '../payment-option/payment-option';

import styles from './payment.module.css';

export function Payment() {
  return (
    <section className={styles['container']}>
      <h2 className={styles['heading']}>
        Don&apos;t leave your date waiting!!
      </h2>

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

      <h3 className={styles['choose']}>Choose a membership plan:</h3>
      <div className={styles['options']}>
        <PaymentOption name="Weekly" price="499" period="week" />
        <PaymentOption
          name="Monthly"
          price="1,499"
          period="month"
          bestValue={true}
        />
        <PaymentOption name="Forever Alone" price="499,999" period="eternity" />
      </div>

      <div className={styles['cardImageContainer']}>
        <Image
          alt="All major credit cards accepted"
          src="/images/cards.png"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      <div className={styles['imageContainer']}>
        <Image
          alt="Waiting for date"
          src="/images/waiting.jpg"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </section>
  );
}

export default Payment;
