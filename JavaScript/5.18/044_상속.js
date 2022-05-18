class Robot {
    constructor(name) {
        this.name = name; // this = 인스턴스
    }

    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}


class BabyRobot extends Robot {
    // constructor(name) {
    //     super(name);
    //     this.ownName = '아이크';
    // }
    // constructor 안에서는 부모를 super로 받아오고 함수 안에서는 this로 받아온다
    // 생략해도 부모꺼 그대로 가져옴

    sayBabyName() {
				// 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
        this.sayYourName();
        console.log('Succeeding you, Father!');
    }
}

const baby = new BabyRobot('재현');