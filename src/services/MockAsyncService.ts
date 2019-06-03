export default function callAsync(): Promise<{}> {
  return new Promise(
    (resolve): number =>
      setTimeout((): void => {
        resolve('foo');
      }, 300),
  );
}
