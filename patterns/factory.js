export const _factoryPattern = () => {
  
  
  const createUser = param => {
    
    // todo функция конструктор
    const CreateUser = function (data) {
      this.values = data;
    };
    
    for (const key in param) {
      Object.defineProperty(CreateUser.prototype, key, {
        get() {
          console.log('Читаем', key);
          return this.values[key];
        },
        set(value) {
          console.log('запись', key);
          const def = param[key];
          const valid = typeof value === def.type &&
            def.validate(value);
          if (valid) {
            this.values[key] = value;
          } else {
            console.log('not valid', key, value);
          }
        }
      });
    }
    console.log(' CreateUser.prototype: ', CreateUser.prototype);
    return CreateUser;
  };
  
  const User = createUser({
    fullName: {type: 'string', validate: str => !!str.length},
    age: {type: 'number', validate: age => age > 0},
  });
  
  const user = new User({
    fullName: 'zigmund freid',
    age: 35,
  });
  
  console.log(' user: ', user);
  
  user.age = 'hi';
  console.log(' user: ', user.age);
  user.age = 0;
  console.log(' user: ', user.age);
  user.age = 16;
  console.log(' user: ', user.age);
};