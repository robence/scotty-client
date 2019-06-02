import React from 'react';

export default function CardComponent({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return <div className="card">{children}</div>;
}
