import React, { useState } from 'react';
import Presenter from './EnterAmountComponent';

type ExpenseRadio = '-' | '+';
const initialRadio: ExpenseRadio = '-';

export default function Container() {
  const [radio, setRadio] = useState(initialRadio);

  const handleRadio = (e: any) => {
    setRadio(e.target.value);
  };

  return <Presenter radio={radio} handleRadio={handleRadio} />;
}
