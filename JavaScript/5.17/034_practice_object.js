const tanker = {
    name: 'knight',
    job: 'tanking',
    skill: 'shield',
    hp: '10000',
    mp: '10000',
    critical: function(reinforce) {
        reinforce.criticalUp;
    }
}

const reinforce = {
    critical: '35',
    criticalUp : function() {   
            this.critical++;
    }
}

tanker.critical(reinforce);


// 생성자와 프로토타입 사용해보기
function Tanker(name) {
    this.name = name,
    job = 'tanking',
    skill = 'shield',
    hp = '10000',
    mp = '10000',
    critical = '';
}

Tanker.prototype.reinforce = function () {
    console.log(this);
    this.critical++;
}

const tanker1 = new Tanker('본캐');
const tanker2 = new Tanker('부캐');

console.log(tanker1.reinforce === tanker2.reinforce); // true