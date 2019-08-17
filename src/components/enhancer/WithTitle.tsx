import React from 'react';

type WithTitleType = {
  title: string;
  children: JSX.Element;
};

export default function WithTitleComponent({ title, children }: WithTitleType) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
