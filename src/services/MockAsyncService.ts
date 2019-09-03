const asyncService = (data: any, time = 1234): Promise<any> =>
  new Promise((resolve): void => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });

export default asyncService;
