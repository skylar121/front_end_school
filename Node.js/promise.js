// promise: then을 통해 함수 플로우를 제어하는 문법

// pending 대기상태 (promise 호출시)
// fulfilled 이행상태
// rejected 실패상태

// 1. 대기상태
// 성공했을때 resolve, 실패했을때 reject
// function sayHello() {
//   return new Promise((resolve, reject) => {
//     const hello = "Hello Hello"
//     resolve(hello);
//   })
// }

// // sayHello 함수 다음 실행하겠다
// sayHello().then((resolvedData) => {
//   console.log(resolvedData);
// })
// resolve(hello) 를 resolvedData가 받아옴


// reject의 경우
function sayHello() {
  return new Promise((resolve(value: any): void
    resolve('hello!!!');
  ));
}

// then 으로 연속적으로 함수 실행하기 ex) 회원가입
sayHello().then((resolvedData) => {
  console.log(resolvedData);
  return resolvedData;
})
.then(resolvedData => {
  console.log(resolvedData);
  return resolvedData;
})
.then(resolvedData => {
  console.log(resolvedData);
})
.catch((error) => {
  console.log(error);
})