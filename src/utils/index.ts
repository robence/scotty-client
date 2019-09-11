export default function objectify<R>(
  list: Array<R>,
  prop: keyof R | '_id' = '_id',
): { [key: string]: R } {
  return list.reduce(
    (memo: { [key: string]: R }, acc: R) => ({
      ...memo,
      /* eslint-disable-next-line */
      // @ts-ignore
      [acc[prop]]: acc,
    }),
    {},
  );
}
