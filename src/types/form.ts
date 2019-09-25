import { MouseEvent, ChangeEvent } from 'react';
import { Base } from './base';

export type FormElementProps = {
  selected: any;
  options: Base[];
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
