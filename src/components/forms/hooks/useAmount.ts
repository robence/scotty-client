import { ChangeEvent, useState } from 'react';

export default function useAmount(): {
  unsignedAmount: number;
  handleAmount: (e: ChangeEvent<HTMLInputElement>) => void;
} {
  const [unsignedAmount, setAmount] = useState(0);

  // removes sign and extra space
  // input value is bound to the amount variable which is number
  const handleAmount = (e: ChangeEvent<HTMLInputElement>): void => {
    const input = Number(e.target.value.slice(2));
    if (!Number.isNaN(input)) setAmount(Number(e.target.value.slice(2)));
  };

  return {
    unsignedAmount,
    handleAmount,
  };
}
