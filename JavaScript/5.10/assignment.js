let data = [{
  반 : 1, 
  번 : 1, 
  이름 : "호준", 
  중간고사점수 : 55
}, {
  반 : 1, 
  번 : 2, 
  이름 : "길동", 
  중간고사점수 : 60
}, {
  반 : 1, 
  번 : 3, 
  이름 : "영희", 
  중간고사점수 : 30
}, {
  반 : 1, 
  번 : 4, 
  이름 : "철수", 
  중간고사점수 : 20
}, {
  반 : 1, 
  번 : 5, 
  이름 : "규리", 
  중간고사점수 : 100
}]

// 연습문제(배운것을 사용하여 아래 화살표 함수로 되어 있는 것을 일반 함수로 바꿔주세요.)
// 1. console.log(data.map(x => x.중간고사점수))
// 2. console.log(data.map(x => [x.이름,x.중간고사점수]))
// 1. [10, 20, 30, 40] 값의 평균을 구하는 **함수**를 만들어주세요.
// 2. (나아가기) 숫자단위 콤마를 찍는 **함수**를 만들어주세요.
// ex) 1000000000 -> 1,000,000,000

// 연습문제 1
console.log(data.map(function (x) {
  return x.중간고사점수;
}));

// 연습문제 2
console.log(data.map(function (y) {
  return [y.이름, y.중간고사점수];
}));

// 문제 1
function mean (arr) {
  return arr.reduce((acc, value) => acc + value) / arr.length;
};
mean([10, 20, 30, 40]);

// // 문제 2
// function comma(num) {
//   let temp = (Array.from(num.toString())).reverse();
//   for (let j = 3; j < temp.length; j+=4) {
//       temp.splice(j, 0, ',');
//   };  
//   return temp.reverse().join('');
// };

// console.log(comma(100000000));

// 문제2 reverse 없이, j가 num 자릿수에 상관없이
function comma(num) {
  let temp = (Array.from(num.toString()));
  for (let j = temp.length - 3; j > 0; j-=3) {
      temp.splice(j, 0, ',');
  };
  return temp.join('');
};

console.log(comma(1000000000));

// 문제2 toLocaleString() 함수 활용
function comma(number){
  return number.toLocaleString('ko-Kr');
};