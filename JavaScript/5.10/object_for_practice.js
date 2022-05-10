let value = [10, 1, 100, 200, 300, 10];
undefined
let value2 = {
	피카츄 : 1,
	라이츄 : 2,
	파이리 : 3,
	꼬부기 : 4,
	버터플 : 5,
	야도란 : 6,
	피죤투 : 7,
	또가스 : 8,
	메타몽 : 9,
};
undefined
let value3 = {
	피카츄 : 10,
	라이츄 : 20,
	파이리 : 30,
	꼬부기 : 40,
	버터플 : 50,
	야도란 : 60,
	피죤투 : 70,
	또가스 : 80,
	메타몽 : 90,
};
undefined
for (let i in value) {
    console.log(i);
}
VM472:2 0
VM472:2 1
VM472:2 2
VM472:2 3
VM472:2 4
VM472:2 5
undefined
typeof value
'object'
for (let i in value2) {
    console.log(i);
}
VM518:2 피카츄
VM518:2 라이츄
VM518:2 파이리
VM518:2 꼬부기
VM518:2 버터플
VM518:2 야도란
VM518:2 피죤투
VM518:2 또가스
VM518:2 메타몽
undefined
for (let i in value2) {
    console.log(i);
    console.log(value2[i]);
}
VM657:2 피카츄
VM657:3 1
VM657:2 라이츄
VM657:3 2
VM657:2 파이리
VM657:3 3
VM657:2 꼬부기
VM657:3 4
VM657:2 버터플
VM657:3 5
VM657:2 야도란
VM657:3 6
VM657:2 피죤투
VM657:3 7
VM657:2 또가스
VM657:3 8
VM657:2 메타몽
VM657:3 9
undefined
for (let i in value3) {
    console.log(i);
    console.log(value2[i]);
}
VM672:2 피카츄
VM672:3 1
VM672:2 라이츄
VM672:3 2
VM672:2 파이리
VM672:3 3
VM672:2 꼬부기
VM672:3 4
VM672:2 버터플
VM672:3 5
VM672:2 야도란
VM672:3 6
VM672:2 피죤투
VM672:3 7
VM672:2 또가스
VM672:3 8
VM672:2 메타몽
VM672:3 9
undefined
for (let i in value3) {
    console.log(i);
    console.log(value2[i]);
}
VM679:2 피카츄
VM679:3 1
VM679:2 라이츄
VM679:3 2
VM679:2 파이리
VM679:3 3
VM679:2 꼬부기
VM679:3 4
VM679:2 버터플
VM679:3 5
VM679:2 야도란
VM679:3 6
VM679:2 피죤투
VM679:3 7
VM679:2 또가스
VM679:3 8
VM679:2 메타몽
VM679:3 9
undefined
for (let i in value3) {
    console.log(i);
    console.log(value3[i]);
}
VM697:2 피카츄
VM697:3 10
VM697:2 라이츄
VM697:3 20
VM697:2 파이리
VM697:3 30
VM697:2 꼬부기
VM697:3 40
VM697:2 버터플
VM697:3 50
VM697:2 야도란
VM697:3 60
VM697:2 피죤투
VM697:3 70
VM697:2 또가스
VM697:3 80
VM697:2 메타몽
VM697:3 90
undefined
for (let i in 'hello world') {
    console.log(i);
}
VM766:2 0
VM766:2 1
VM766:2 2
VM766:2 3
VM766:2 4
VM766:2 5
VM766:2 6
VM766:2 7
VM766:2 8
VM766:2 9
VM766:2 10
undefined
for (let i in 'hello world') {
    console.log(i);
    console.log('hello world'[i]);
}
VM933:2 0
VM933:3 h
VM933:2 1
VM933:3 e
VM933:2 2
VM933:3 l
VM933:2 3
VM933:3 l
VM933:2 4
VM933:3 o
VM933:2 5
VM933:3  
VM933:2 6
VM933:3 w
VM933:2 7
VM933:3 o
VM933:2 8
VM933:3 r
VM933:2 9
VM933:3 l
VM933:2 10
VM933:3 d
undefined
Object.keys(value3)
(9) ['피카츄', '라이츄', '파이리', '꼬부기', '버터플', '야도란', '피죤투', '또가스', '메타몽']
let 포켓몬 = Object.keys(value3);
undefined
for (let i of [10, 20, 30, 40]) {
    console.log(i);
}
VM1319:2 10
VM1319:2 20
VM1319:2 30
VM1319:2 40
undefined
for (let i of 'hello world') {
    console.log(i);
}
VM1368:2 h
VM1368:2 e
VM1368:2 l
VM1368:2 l
VM1368:2 o
VM1368:2  
VM1368:2 w
VM1368:2 o
VM1368:2 r
VM1368:2 l
VM1368:2 d
undefined
for (let i of value3) {
    console.log(i);
}
VM1397:1 Uncaught TypeError: value3 is not iterable
    at <anonymous>:1:15
(익명) @ VM1397:1
for (let i of Object.entries(value3)) {
    console.log(i);
}
VM1444:2 (2) ['피카츄', 10]
VM1444:2 (2) ['라이츄', 20]
VM1444:2 (2) ['파이리', 30]
VM1444:2 (2) ['꼬부기', 40]
VM1444:2 (2) ['버터플', 50]
VM1444:2 (2) ['야도란', 60]
VM1444:2 (2) ['피죤투', 70]
VM1444:2 (2) ['또가스', 80]
VM1444:2 (2) ['메타몽', 90]
undefined
for (let i, let j of Object.entries(value3)) {
    console.log(i);
    console.log(j);
}
VM1528:1 Uncaught SyntaxError: let is disallowed as a lexically bound name
for ((let i, let j) of Object.entries(value3)) {
    console.log(i);
    console.log(j);
}
VM1585:1 Uncaught SyntaxError: Unexpected identifier
for (let [i, j] of Object.entries(value3)) {
    console.log(i);
    console.log(j);
}
VM1635:2 피카츄
VM1635:3 10
VM1635:2 라이츄
VM1635:3 20
VM1635:2 파이리
VM1635:3 30
VM1635:2 꼬부기
VM1635:3 40
VM1635:2 버터플
VM1635:3 50
VM1635:2 야도란
VM1635:3 60
VM1635:2 피죤투
VM1635:3 70
VM1635:2 또가스
VM1635:3 80
VM1635:2 메타몽
VM1635:3 90
undefined
Object.entries(value3)
(9) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]0: (2) ['피카츄', 10]1: (2) ['라이츄', 20]2: (2) ['파이리', 30]3: (2) ['꼬부기', 40]4: (2) ['버터플', 50]5: (2) ['야도란', 60]6: (2) ['피죤투', 70]7: (2) ['또가스', 80]8: (2) ['메타몽', 90]length: 9[[Prototype]]: Array(0)
for (let [i, j] of [[1, 2], [3, 4]]) {
    console.log(i, j);
}
VM1677:2 1 2
VM1677:2 3 4
undefined
[[[1, 2], 2], [[1, 2], 4]] // 구조분해할당
(2) [Array(2), Array(2)]
for (let [i, j] of [[[1, 2], 2], [[1, 2], 4]]) {
    console.log(i, j);
}
VM1798:2 (2) [1, 2] 2
VM1798:2 (2) [1, 2] 4
undefined
for (let [[a, b], j] of [[[1, 2], 2], [[1, 2], 4]]) {
    console.log(a, b, j);
}
VM1868:2 1 2 2
VM1868:2 1 2 4
undefined