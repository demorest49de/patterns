export const _noSingleton = () => {
  class NotSingletion {
    constructor(x) {
      this.a = 5;
      this.b = x;
    }
  }
  
  console.log(' NotSingletion: ',new NotSingletion(35));
  console.log(' NotSingletion: ',new NotSingletion(10));
};