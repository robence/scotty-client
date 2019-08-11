import React, {useState} from 'react'
import Presenter from './Presenter';

type ExpenseRadio = '-' | '+';

export default function Container() {
  const [radio, setRadio] = useState('-');

  const handleRadio = (e: any) => {
    setRadio(e.target.value);
  }

  return (
    <Presenter radio={radio as ExpenseRadio} handleRadio={handleRadio} />

  )
}
