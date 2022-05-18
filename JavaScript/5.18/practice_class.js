class Sausage {
    constructor(재료1, 재료2) {
        this.재료1 = 재료1,
        this.재료2 = 재료2
    }

    taste = () => {
        console.log(`${this.재료1}와 ${this.재료2} 맛이 난다!`);
    }
}

class FireSausage extends Sausage {
    constructor(재료1, 재료2) {
        super(재료1, 재료2);
        this.own재료 = '불'
    }

    fireTaste() {
        this.taste();
        console.log(`${this.own재료}맛이 나기 시작한다!`);
    }
}

const sausage1 = new FireSausage('소고기', '파');
sausage1.fireTaste();

// class Sausage {
//     constructor(el1, el2) {
//         this.inside1 = el1;
//         this.inside2 = el2;
//     }

//     taste() {
//         console.log(`${this.inside1}와 ${this.inside2}의 맛이 난다!!`);
//     }
// }

// const sausage = new Sausage('소고기', '돼지고기');

// class FireSausage extends Sausage {
//     constructor(el1, el2, el3) {
//         super(el1, el2);
//         this.inside3 = el3;
//     }


//     taste() {
//         console.log(`${this.inside1}와 ${this.inside2}의 맛이 난다!! 불맛도 난다!!`);
//     }
// }

const fireSausage = new FireSausage('소고기', '돼지고기');