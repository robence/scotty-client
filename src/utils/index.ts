export const objectify = (list: any, prop = 'id') => {
  return list.reduce(
    (memo: { [key: number]: any }, acc: any) => ({
      ...memo,
      [acc[prop]]: acc,
    }),
    {},
  );
};

export const generateArray = (size: number, name: string) =>
  Array(size)
    .fill(null)
    .map((_, id) => ({ id, name: `${name}${id + 1}` }));

export const mapArrayToObject = (
  size: number,
  name: string,
): { [key: string]: any } => objectify(generateArray(size, name));

export const genId = (from: number) =>
  Math.floor(Math.random() * 999 + from + 1);
