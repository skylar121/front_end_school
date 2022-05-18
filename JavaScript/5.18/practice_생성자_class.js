// 나만의 객체 만들기

// 생성자
// const tanker = {
//     name: 'knight',
//     job: 'tanking',
//     skill: 'shield',
//     hp: '10000',
//     mp: '10000',
//     critical: function(reinforce) {
//         reinforce.criticalUp;
//     }
// }

// const reinforce = {
//     critical: '35',
//     criticalUp : function() {   
//             this.critical++;
//     }
// }

// tanker.critical(reinforce);


// // 프로토타입 사용해보기
// function Tanker(name) {
//     this.name = name,
//     job = 'tanking',
//     skill = 'shield',
//     hp = '10000',
//     mp = '10000',
//     critical = '';
// }

// Tanker.prototype.reinforce = function () {
//     console.log(this);
//     this.critical++;
// }

// const tanker1 = new Tanker('본캐');
// const tanker2 = new Tanker('부캐');

// console.log(tanker1.reinforce === tanker2.reinforce); // true

// 클래스 사용해보기
class Tanker {
    constructor(name, job, critical) {
        this.name = name,
        this.job = job,
        this.critical = critical
    }

    reinforce = function () {
        console.log(this);
        this.critical++;
    }
}

const me = new Tanker('본캐', '탱커', 1);
me.reinforce();
console.log(me);


// 재현님 예시

// function Me(name, address, phoneNum) {
        //     this.name = name;
        //     this.address = address;
        //     this.phoneNum = phoneNum;
        // }

        // Me.prototype.canWalk = function () {
        //     console.log('재현이가 걷는다.');
        // }

        // Me.prototype.teaching = function (student) {
        //     student.levelUp();
        // }

        // function Student(level) {
        //     this.level = level;
        // }

        // Student.prototype.levelUp = function () {
        //     this.level++;
        // }


        // class Me {
        //     constructor(name, address, phoneNum) {
        //         this.name = name;
        //         this.address = address;
        //         this.phoneNum = phoneNum;
        //     }

        //     canWalk = function () {
        //         console.log('재현이가 걷는다.');
        //     }

        //     teaching = function (student) {
        //         student.levelUp();
        //     }
        // }

        // class Student {
        //     constructor(level) {
        //         this.level = level;
        //     }
        //     levelUp = function () {
        //         this.level++;
        //     }
        // }

        // const me = new Me('재현', '010-0101-0101', '제주도');
        // const student = new Student(1);