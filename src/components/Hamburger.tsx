import React from 'react';
import { ISetHamburger } from '../types';

export default function Hamburger({
  setHamburger,
}: {
  setHamburger: ISetHamburger;
}): JSX.Element {
  return (
    <div className="hamburger">
      <button onClick={setHamburger} />
    </div>
  );
}
