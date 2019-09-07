export const objectify = (list: any, prop = '_id'): any =>
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
): { _id: string; name: string }[] =>
  Array(size)
    .fill(null)
    .map((_, id) => ({ _id: id.toString(), name: `${name}${id + 1}` }));

export const generateObject = (
  size: number,
  name: string,
): { [key: string]: any } => objectify(generateArray(size, name));

export const genId = (from: number): string =>
  Math.floor(Math.random() * 999 + from + 1).toString();
