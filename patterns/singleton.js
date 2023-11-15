export const _noSingleton = () => {
  class NotSingletion {
    constructor(x) {
      this.a = 5;
      this.b = x;
    }
  }
  //
  // console.log(' NotSingletion: ', new NotSingletion(35));
  // console.log(' NotSingletion: ', new NotSingletion(10));
};

export const _singletonPattern = () => {
  const SingletonFn = (() => {
    let instance;
    
    class Singletion {
      constructor(x) {
        if (instance) return instance;
        instance = this;
        this.a = 5;
        this.b = x;
      }
    }
    
    return Singletion;
  })();
  //
  // console.log(' Singleton: ',new SingletonFn(35));
  // console.log(' Singleton: ',new SingletonFn(25));
  // console.log(' Singleton: ',new SingletonFn(15));
}