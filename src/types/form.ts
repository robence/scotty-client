import { MouseEvent } from 'react';
import { Base } from './model';

export type FormElementProps = {
  selected: any;
  options: Base[];
  onChange: (e: any) => void;
};

export type ButtonProps = {
  onClick: (e?: MouseEvent) => void;
  disabled?: boolean;
};
