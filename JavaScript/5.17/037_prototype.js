function NewFactory2(name){
    this.name = name;
}

NewFactory2.prototype.sayYourName = function(){
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
}

// const newbot1 = new NewFactory2('재현');

// newbot1.name

// newbot1.sayYourName()

// const newbot2 = new NewFactory2('브랜든');

// newBot2.sayYourName();

// newbot2.sayYourName();

// newbot1.sayYourName === newbot2.sayYourName