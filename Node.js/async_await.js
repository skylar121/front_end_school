function sayHello() {
  return new Promise((resolve(value: any): void
    resolve('hello!!!');
  ));
}

async function test() {
  const hello1 = await sayHello();
  console.log(hello);
}
// promise 자체가 비동기여서 async + await 작성하지 않으면 바로 실행될수도 있음

test();