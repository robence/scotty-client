import React from 'react';

export default function Spinner({
  loader = 'Loader1',
}: {
  loader: string;
}): JSX.Element {
  return <img className="spinner" src={`${loader}.png`} alt="logo" />;
}
