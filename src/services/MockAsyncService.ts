export default function callAsync(): Promise<{}> {
  return new Promise(
    (resolve): any =>
      setTimeout((): void => {
        resolve('foo');
      }, 300),
  );
}
