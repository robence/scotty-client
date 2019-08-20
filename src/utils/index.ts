export const objectify = (list: any) => {
  return list.reduce(
    (memo: { [key: number]: any }, acc: any) => ({
      ...memo,
      [acc.id]: acc,
    }),
    {},
  );
};

export const gen = (size: number, name: string) =>
  Array(size)
    .fill(null)
    .map((_, id) => ({ id, name: `${name}${id + 1}` }));

export const genObj = (size: number, name: string): { [key: string]: any } =>
  objectify(gen(size, name));

export const genId = (from: number) =>
  Math.floor(Math.random() * 999 + from + 1);
