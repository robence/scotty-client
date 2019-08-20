import { MouseEvent } from 'react';

export type IdNameTuple = {
  id: string | number;
  name: string;
};

export type FormElementProps = {
  selected: any;
  options: IdNameTuple[];
  onChange: (e: any) => void;
};

export type ButtonProps = {
  onClick: (e?: MouseEvent) => void;
  disabled?: boolean;
};
