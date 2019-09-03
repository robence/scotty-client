export const objectify = (list: any, prop = 'id'): any =>
  list.reduce(
    (memo: { [key: number]: any }, acc: any) => ({
      ...memo,
      [acc[prop]]: acc,
    }),
    {},
  );

export const generateArray = (
  size: number,
  name: string,
): { id: number; name: string }[] =>
  Array(size)
    .fill(null)
    .map((_, id) => ({ id, name: `${name}${id + 1}` }));

export const generateObject = (
  size: number,
  name: string,
): { [key: string]: any } => objectify(generateArray(size, name));

export const genId = (from: number): number =>
  Math.floor(Math.random() * 999 + from + 1);
