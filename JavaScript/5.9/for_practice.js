// for문을 사용하여 'hello world'에서 l이 사용된 개수를 구해주세요.
txt = 'hello world';
count = 0;
for (let i = 0; i < txt.length; i++) {
    if(txt[i] == 'l') {
        count++;
    }
};
console.log(count);

// 12390812476 각 숫자들을 더해주세요.
txt = '12390812476'
sum = 0
for (let j = 0; j < txt.length; j++) {
  sum += +txt[j];
}
console.log(sum);

// arr의 평균
arr = ['33', '29', '11', '55', '47']
avg = 0
for (let k = 0; k < arr.length; k++) {
  avg += +arr[k] / arr.length;
}
console.log(avg);

// 구구단 2단 출력하기
for (let i = 1; i < 10; i++) {
  console.log(`2 X ${i} = ${2*i}`)
};

for (let 단 = 2; 단 < 10; 단++) {
  for (let i = 1; i < 10; i++) {
      console.log(`${단} X ${i} = ${단*i}`)
  }   
}

// 20 미만 3의 배수 출력하기
for (let i = 3; i < 20; i+=3) {
  console.log(i);
}

// 100 이하 짝수들의 합
result = 0;
for (let i = 0; i <= 100; i+=2) {
  result +=i;
};
console.log(result);

/* 내가한거 - 순회 100번하고 % 연산을 두번 더해서 감점요인
result = 0
for (let i = 0; i <=100; i++) {
    if (i %2 ===0) {
    result +=i;
}
};
*/

// 'hello world' 역순으로 출력하기
txt = 'hello world'
result=''
for (let i = 0; i < txt.length; i++) {
    result = txt[i] + result;    
}
console.log(result);

// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

arr = [1, 3, 4, 8, 13, 17, 20]
result = 10000000
index = 0
for (let i = 1; i < arr.length; i++) {
  if (result > arr[i] - arr[i-1]) {
    result = arr[i] - arr[i-1];
    index = i;
  }
}
console.log(arr[index-1], arr[index]);

// arr = [1, 3, 4, 8, 13, 17, 20]
// result = 10000000
// index = 0
// for (let i = 0; i < arr.length-1; i++) {
//   if (result > arr[i+1] - arr[i]) {
//     result = arr[i+1] - arr[i];
//     index = i;
//   }
// }
// console.log(arr[index], arr[index+1]);