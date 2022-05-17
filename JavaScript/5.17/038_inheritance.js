function Parent() {
    this.name = '재현';
}

Parent.prototype.rename = function (name) {
    this.name = name;
}

Parent.prototype.sayName = function () {
    console.log(this.name);
}