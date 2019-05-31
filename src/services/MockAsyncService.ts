export default function callAsync() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve('foo');
    }, 300),
  );
}
