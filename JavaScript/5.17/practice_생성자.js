const foods = ['짜장면', '뽁음밥', '해장국', '치킨'];

function FoodBot(foodNames) {
    this.menu = foodNames;
    this.sayMenu = function () {
        console.log(this.menu[Math.floor(Math.random() * this.menu.length)]);
    }
}

const foodBot1 = new FoodBot(foods);