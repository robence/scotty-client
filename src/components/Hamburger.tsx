import React from 'react';

export default function Hamburger({ setHamburger }: any): JSX.Element {
  return (
    <div className="hamburger">
      <button onClick={setHamburger} />
    </div>
  );
}
