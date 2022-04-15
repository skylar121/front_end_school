var lotto = [];

while (lotto.length<6) {
    var num = parseInt(Math.random() * 45 + 1)
    // 중복 번호 걸러내기 (중복 번호가 아닐 경우에 array에 push해)
    if  (lotto.indexOf(num)) == -1 {
        lotto.push(num);
    }
}

}
// for (var i = 0; i<6; i++) {
    

var lotto = [1,2,3,33,22,11];
lotto.sort((a-b) => a - b);
document.write (lotto);