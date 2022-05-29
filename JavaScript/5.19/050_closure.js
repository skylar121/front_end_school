// 렉시컬 스코프 (정적 스코프) = 맥락에 따라 스코프가 결정되는 것, JS의 기본
// 함수의 상위 스코프를 결정하는 방법
// 이너함수를 감싸고있는 아우터 함수가 상위스코프, 상위에 없으면 없다고 침
// 이너함수의 상위스코프는 바뀔리가 없음
function outer() {
    let val = 'test';

    function inner() {
        console.log(val);
    }

    return inner;
}

const innerFunc = outer();

innerFunc();




// 다이나믹 스코프(동적 스코프) - 함수가 실행되는 시점에 상위 스코프가 결정이 된다.
// 동적 스코프 예시 (펄 언어)
// sub add {
//     $balance += shift;
// }

// sub transaction_a {
//     local $balance = 0; // local이 dynamic scope 선언
//     say add(1);
//     transaction_b();
//     say add(100);
// }

// sub transaction_b {
//     local $balance = 5;
//     say add(10);
// }