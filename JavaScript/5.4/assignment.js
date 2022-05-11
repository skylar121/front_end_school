const arr = [{
      "_id": "6271fd40fe5c58d4cbd3a72f",
      "index": 0,
      "guid": "60f843d2-1b6b-4536-b421-e5df1c4ab735",
      "isActive": true,
      "balance": "$2,534.11",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "brown",
      "name": "Miranda Nguyen",
      "gender": "male",
      "company": "ZENTIA",
      "email": "mirandanguyen@zentia.com",
      "phone": "+1 (833) 466-3207",
      "address": "198 Dank Court, Hartsville/Hartley, Indiana, 8416",
      "about": "Consectetur proident anim do commodo ipsum. Elit consectetur irure dolore voluptate. Enim aute voluptate et qui do. Eu pariatur laboris labore esse enim reprehenderit mollit ullamco fugiat. Laborum sunt veniam consectetur laboris cupidatat. Lorem tempor occaecat labore ut et eiusmod amet.\r\n",
      "registered": "2021-06-16T11:50:54 -09:00"
  },
  {
      "_id": "6271fd40e30856d15651c60c",
      "index": 1,
      "guid": "ee647592-0647-4ad5-96b1-eb6c06a32dbd",
      "isActive": true,
      "balance": "$2,636.22",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "blue",
      "name": "Florence Flynn",
      "gender": "female",
      "company": "ELENTRIX",
      "email": "florenceflynn@elentrix.com",
      "phone": "+1 (901) 525-3731",
      "address": "246 Billings Place, Brandermill, Guam, 5037",
      "about": "Sint non dolore cupidatat voluptate laboris adipisicing eu quis. Laboris nostrud qui dolor cillum dolor nulla sint culpa est reprehenderit sint ipsum nisi excepteur. Qui cupidatat sint do aliquip ut. Officia est aliquip fugiat ex enim do sunt consequat.\r\n",
      "registered": "2014-12-10T08:44:47 -09:00"
  },
  {
      "_id": "6271fd404394e16d79143873",
      "index": 2,
      "guid": "3d3890ff-8241-4a2b-a361-789e0298817a",
      "isActive": false,
      "balance": "$1,047.32",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "green",
      "name": "Debbie Pratt",
      "gender": "female",
      "company": "OPTIQUE",
      "email": "debbiepratt@optique.com",
      "phone": "+1 (831) 537-3188",
      "address": "737 Quentin Street, Calpine, Louisiana, 9102",
      "about": "Officia nisi labore mollit cupidatat exercitation commodo duis adipisicing officia amet laborum. Nulla qui commodo aliqua reprehenderit dolore cupidatat esse ea pariatur sint ad dolore. Exercitation duis veniam velit occaecat est irure quis labore occaecat.\r\n",
      "registered": "2016-09-19T10:00:38 -09:00"
  }];

/**
 * 1. user의 id와 name, age를 가진 새로운 array를 만들어주세요.
 * 2. user의 age가 27 이상인 사람의 데이터를 id만 추출해주세요.
 * 3. id가 6271fd40e30856d15651c60c 인 사람의 name만 추출해주세요.
 * 4. (더 나아가기) user의 평균 나이를 구해주세요.
 * 5. (더 나아가기) user의 성비를 구해주세요.
 */

// 1번 문제
const answer1 = arr.map(i => [i._id, i.name, i.age]);
console.log(answer1);

// const answer1_1 = arr.map(val => {
//   return [{"id": val._id, "name": val.name, "age": val.age}];
// });
// console.log(answer1_1);


// 2번 문제
const answer2 = arr.filter(i => i.age >= 27).map(i => i._id);
console.log(answer2);


// 3번 문제 -> find는 부합하는 값 1개를 반환, 즉 여기서는 객체이므로 map 메서드를 쓸수없다. 평가값 check !!!
const answer3 = arr.find(i => i._id === '6271fd40e30856d15651c60c').name;
console.log(answer3);


// 4번 문제
const answer4 = arr.map(i => i.age);
let avgAge = 0;
for (let i = 0; i < answer4.length; i++) {
  avgAge += answer4[i] / answer4.length;
};
console.log(avgAge);

// 4번 추가 풀이
const egi = arr.map(i => i.age).reduce((acc,val) => acc+val)/arr.length;
console.log(egi);


// 5번
const numFemale = arr.map(i => i.gender).filter(i => i==='female').length;
let ratio = Math.round((numFemale / arr.length *100) * 10) / 10 + '%';
console.log(ratio);