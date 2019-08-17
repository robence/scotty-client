export const gen = (size: number, name: string) =>
  Array(size)
    .fill(null)
    .map((_, id) => ({ id, name: `${name}${id + 1}` }));
