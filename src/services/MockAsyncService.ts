const asyncService = (self: any, time = 1234) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(self);
    }, time);
  });
};

export default asyncService;
