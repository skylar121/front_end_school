for (let i = 0; i < 5; i++) {
  console.log(i);
};

let sample = ['A', 'B', 'C', 'DD', 'EE'];
for (let i = 0; i < sample.length; i++) {
  console.log(sample[i]);
};

let i = 0;
for (;;) {
    i++;
    console.log(i);
    if(i > 5) {
      break;
    }
  };

let age = [19, 30, 23, 28, 32, 40, 32, 35, 29, 30];
let sum = 0;
for (let i = 0; i < age.length; i++) {
  console.log(age[i]);
  sum += age[i];
};
sum / age.length;



let data = [
  {회원번호:0, 아이디:'a', 성별:'남', 나이:21},
  {회원번호:1, 아이디:'b', 성별:'남', 나이:17},
  {회원번호:2, 아이디:'c', 성별:'여', 나이:6},
  {회원번호:3, 아이디:'d', 성별:'여', 나이:55}
]

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}
// {회원번호: 0, 아이디: 'a', 성별: '남', 나이: 21}
// {회원번호: 1, 아이디: 'b', 성별: '남', 나이: 17}
// {회원번호: 2, 아이디: 'c', 성별: '여', 나이: 6}
// {회원번호: 3, 아이디: 'd', 성별: '여', 나이: 55}


for (let i = 0; i < data.length; i++) {
  if(data[i]['나이'] >= 20 && data[i]['성별'] == '여'){
      console.log(data[i][회원번호])
  }
}

for (let i = 0; i < data.length; i++) {
  if(data[i]['나이'] >= 20 && data[i]['성별'] == '여'){
      console.log(data[i]['회원번호'])
  }
}

result = []
for (let i = 0; i < data.length; i++) {
  if(data[i]['나이'] >= 20 && data[i]['성별'] == '여'){
      result.push(data[i]['회원번호'])
  }
}

let 나이총합 = 0
for (let i = 0; i < data.length; i++) {
  나이총합 += data[i]['나이'] // 나이총합 = 나이총합 + data[i]['나이']
}

나이총합/data.length

data.map(i=> i['나이']) // (4) [21, 17, 6, 55]
data.map(i=> i['나이']).reduce((a, b) =>a + b, 0) // 0은 초기값, 99

let 가장큰나이 = 0
for (let i = 1; i < data.length; i++) {
  if(가장큰나이 < data[i]['나이']) {
    가장큰나이 = data[i]['나이']
  }
}

let 가장작은나이 = 0
for (let i = 1; i < data.length; i++) {
  if(가장작은나이 > data[i]['나이']) {
    가장작은나이 = data[i]['나이']
  }
}

let arr = [21, 17, 6, 44]
Math.abs(-3) //3
Math.min(10, 20, 30, 40, 5, 4, 100) // 4
Math.min(...arr) // 6
// ...arr = 대괄호 벗기고 전개구문 만들기
