// 실습: 우리가 만들었던 음식 로봇객체의 메서드를 프로토타입으로 분리해보세요, 그리고 객체의 메서드가 서로 동일한 주소를 참조하는지 확인해보세요.

const foods = ['짜장면', '뽁음밥', '해장국', '치킨'];

function FoodBot(foodNames) {
    this.menu = foodNames;
}

FoodBot.prototype.sayMenu = function () {
    console.log(this.menu[Math.floor(Math.random() * this.menu.length)]);
}

const foodBot1 = new FoodBot(foods);
const foodBot2 = new FoodBot(foods);

// 생성된 객체끼리 메서드를 비교하여 같은 곳을 참조하는지 살펴보기
console.log(foodBot1.sayMenu === foodBot2.sayMenu); // true


// const me = {
//     name: '한재현',
//     address: '제주도 제주시 인다 1길',
//     phoneNum: '010-8001-6536',
//     canWalk: function () {
//         console.log('재현이가 걷는다.');
//     },
//     teaching: function (student) {
//         student.levelUp();
//     }
// }

// const student = {
//     level: 1,
//     levelUp: function () {
//         this.level++;
//     }
// }

function Me(name, address, phoneNum) {
    this.name = name;
    this.address = address;
    this.phoneNum = phoneNum;
}

Me.prototype.canWalk = function () {
    console.log('재현이가 걷는다.');
}

Me.prototype.teaching = function (student) {
    student.levelUp();
}

function Student(level) {
    this.level = level;
}

Student.prototype.levelUp = function () {
    this.level++;
}