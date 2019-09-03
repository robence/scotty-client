import React, { ReactNode } from 'react';

type WithTitleType = {
  title: string;
  children: ReactNode;
};

export default function WithTitleComponent({
  title,
  children,
}: WithTitleType): JSX.Element {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
