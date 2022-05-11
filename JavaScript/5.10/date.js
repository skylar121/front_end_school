// date 객체 활용예시
// 밤이면 다크모드 해줄래~, 서버 시간대별로
// 게시판 작성시간 표시

let d = new Date();
console.log(d); //Tue May 10 2022 10:37:12 GMT+0900 (한국 표준시)

d.getDate(); // 날짜는 1일부터
d.getMonth(); // 월은 0부터
d.getDay(); // 요일은 일요일이 0부터
d.getSeconds(); //new Date 의 것, 지금 현재로 갱신되지 않음