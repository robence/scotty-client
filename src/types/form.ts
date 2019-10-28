import { MouseEvent, ChangeEvent } from 'react';
import { Base } from './base';

export type FormElementProps = {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  selected: any;
  options: Base[];
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  onChange: (e: any) => void;
};

export type InputElementProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clear: () => void;
};

export type ButtonProps = {
  onClick: (e?: MouseEvent) => void;
  disabled?: boolean;
};
