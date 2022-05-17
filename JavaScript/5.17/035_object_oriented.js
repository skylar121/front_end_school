const me = {
    name : '한재현',
    address : '제주도 제주시 인다 1길',
    phoneNum : '010-8001-6536',
    canWalk : function(){
        console.log('재현이가 걷는다.');
    },
    teaching : function(student){
        student.levelUp(); // levelUp 함수실행
    }
}

const student = {
    level: 1, // level 상태
    levelUp : function(){ // levelup 행동
        this.level++; // this는 나를 함수를 호출한 객체를 가리킨다
    }
}

me.teaching(student);

// 객체와 객체가 상호작용