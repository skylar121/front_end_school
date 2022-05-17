function Factory(){};

const item2 = Factory();

item instanceof Factory // true

function NewFactory (name) {
    this.name = name;
    this.sayYourName = function() {
        console.log(`삐리비리비리 제 이름은 ${this.name}입니다.`);
    }
}

const robot1 =  new NewFactory('재현');