export default function callAsync(): Promise<{}> {
  return new Promise(
    (resolve): NodeJS.Timeout =>
      setTimeout((): void => {
        resolve('foo');
      }, 300),
  );
}
