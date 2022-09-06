import styles from './payment-option.module.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface PaymentOptionProps {
  name: string;
  price: string;
  period: string;
}

export function PaymentOption({ name, price, period }: PaymentOptionProps) {
  return (
    <Card className={styles['container']}>
      <CardContent className={styles['content']}>
        <h3 className={styles['heading']}>{name}</h3>
        <div className={styles['price']}>${price}</div>
        <div className={styles['period']}>per {period}</div>
      </CardContent>
    </Card>
  );
}

export default PaymentOption;
