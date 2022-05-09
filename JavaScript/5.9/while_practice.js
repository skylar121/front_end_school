// 구구단 2단 출력하기
i = 1;
while (i < 10) {
  console.log(`2 X ${i} = ${2*i}`);
  i++;
}

// 0부터 101까지 짝수를 모두 더해주세요.
i = 0;
sum = 0;
while (i < 101) {
  sum += i;
  i+=2; // 0부터 하면 순서상관없는데
}
console.log(sum);

i = 2;
sum = 0;
while (i < 101) {
  sum += i;
  i+=2; // 2부터 하면 이게 위에줄로가면 4부터 더해짐
}
console.log(sum);

// 10 이하 숫자들의 합
sum = 0;
i = 0;

while (i < 10) {
		i++;
		sum += i;
};
console.log(sum);

// 구구단 출력
i = 2;
j = 1;
while(i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i*j}`)
    j++;
  }
  j = 1;
  i++;
}

//  4단 제외하고 구구단 출력
for (let x = 2; x < 10; x++) {
  test:
	for (let y = 1; y < 10; y++) {
		if (x === 4) {
      break test; // test 부분으로 바로 갈수 있고, for문이 진행됨
    }
		console.log(`${x} X ${y} = ${x * y}`);
	}
}
