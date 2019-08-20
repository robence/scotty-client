export type IdNameTuple = {
  id: string | number;
  name: string;
};

export type FormElementProps = {
  selected: any;
  options: IdNameTuple[];
  onChange: (e: any) => void;
};
