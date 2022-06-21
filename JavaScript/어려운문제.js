// 카카오 2020년 공체문제 4번
// https://programmers.co.kr/learn/courses/30/lessons/60060

words   : ["frodo", "front", "frost", "frozen", "frame", "kakao"]    
queries : ["fro??", "????o", "fr???", "fro???", "pro?"]
result  : [3, 2, 4, 1, 0]

"fro??"
["frodo", "front", "frost", "frozen", "frame", "kakao"] -> 3

"????o"
["frodo", "front", "frost", "frozen", "frame", "kakao"] -> 2

"fr???"
["frodo", "front", "frost", "frozen", "frame", "kakao"] -> 4


'frodo'.match(/fro../g)
'frodod'.match(/fro../g)
'aafrodod'.match(/fro../g)
'aafroddddod'.match(/fro../g)
'aafaraoddddod'.match(/fro../g)


const 패턴 = new RegExp('fro..', 'g')
패턴.test('frodo')

const 패턴 = new RegExp('fro..', 'g')
패턴.test('frodod')

const 패턴 = new RegExp('fro..', 'g')
패턴.test('aafaraoddddod')


///////////// section - 2 /////////////

// 문제를 푸는게 목적이라 var 쓰는것 (에러 최소화)

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let q = queries[3].replaceAll('?', '.') // 일부러 사용하는 것

const 패턴 = new RegExp(q, 'g')
console.log(패턴.test(words[0]));
console.log(패턴.test(words[1]));
console.log(패턴.test(words[2]));
console.log(패턴.test(words[3])); // frozen만 true
console.log(패턴.test(words[4]));
console.log(패턴.test(words[5]));

패턴.test('afrozena') // true가 나와서, 길이 체크를 해야한다는 것을 캐치!

///////////// section - 3 /////////////
// 여기까지 테스트 안해보고 바로 생각해내야함

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let q = queries[3].replaceAll('?', '.')
const 패턴 = new RegExp(q, 'g')
let answer = [];

for (s of words) {
    console.log(패턴.test(s));
}

/// - ///

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]    
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let answer = []

for (rawQueries of queries){
    let q = rawQueries.replaceAll('?', '.')
    const 패턴 = new RegExp(q, 'g')
    let 매칭카운트 = 0
    for (s of words){
        let 패턴매칭여부 = 패턴.test(s)
        console.log(rawQueries, s, 패턴, 패턴매칭여부, s.length, rawQueries.length);
        if (패턴매칭여부 && s.length === rawQueries.length) {
            매칭카운트 += 1
        }
    }
    answer.push(매칭카운트)
}

////////////////////// section - 4 //////////////////////

// 런타임 애러 -> 우리는 '실패 (0.03ms, 30.1MB)'가 뜨거나 '성공 (0.03ms, 30.1MB)'이 떠야 합니다.
let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]    
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

function solution(words, queries) {
    let answer = [];

    for (rawQueries of queries){
        let q = rawQueries.replaceAll('?', '.')
        let 매칭카운트 = 0
        for (s of words){
            const 패턴 = new RegExp(q, 'g')
            let 패턴매칭여부 = 패턴.test(s)
            if (패턴매칭여부 && s.length === rawQueries.length) {
                매칭카운트 += 1
            }
        }
        answer.push(매칭카운트)
    }
    return answer;
}

// error
function solution(words, queries){
    for (var i = 0; i < queries.length; i++) {
        var rawQueries = queries[i];
        var q = rawQueries.replaceAll('?', '.');
        var count = 0;
    }
    var answer = [3, 2, 4, 1, 0];
    return answer;
}


// 정상 작동
function solution(words, queries){
    for (var i = 0; i < queries.length; i++) {
        var rawQueries = queries[i];
    }
    var answer = [3, 2, 4, 1, 0];
    return answer;
}

// replaceAll이 문제구나! -> 프로그래머스의 Node는 12버전, ReplaceAll은 15버전
function solution(words, queries){
    for (var i = 0; i < queries.length; i++) {
        var rawQueries = queries[i];
        var q = rawQueries.replace(/\?/g, '.');
        var count = 0;
    }
    var answer = [3, 2, 4, 1, 0];
    return answer;
}

////////////////////// section - 5 //////////////////////
function solution(words, queries) {
    let answer = [];

    for (rawQueries of queries){
        let q = rawQueries.replace(/\?/g, '.') // 물음표가 원래 정규표현식에 있는 문법이라 역슬래시 추가
        let 매칭카운트 = 0
        for (s of words){
            const 패턴 = new RegExp(q, 'g')
            let 패턴매칭여부 = 패턴.test(s)
            if (패턴매칭여부 && s.length === rawQueries.length) {
                매칭카운트 += 1
            }
        }
        answer.push(매칭카운트)
    }
    return answer;
}

////////////////////// section - 6 //////////////////////
// 4번이니까, 난이도가 높으니 정규표현식으로 풀리지 않을 것이다.
// 링크드 리스트. 'trie 알고리즘'을 사용해야겠다!
// 이정도 할거면 파이썬 추천

패턴 : 'fro..'
'frodo', 'front'
{'f': 다음object} nodeCount : 2
{'r': 다음object} nodeCount : 2
{'o': 다음object} nodeCount : 2 // 매핑되는 여기까지만 보면 됩니다.
{'d': 다음object} nodeCount : 1 {'n': 다음object} nodeCount : 1
{'o': 다음object} nodeCount : 1 {'t': 다음object} nodeCount : 1

{
    value : 'f'
    count : 1
    {
        value : 'r'
        count : 1
        {
            value : 'o'
            count : 1
            {
                value : 'd'
                count : 1
                {
                    value : 'o'
                    count : 1                    
                }          
            }
        }
    }
}

// [{}], [{}, {}], [{}, {}, {}], [{}, {}, {}, {}], [{}, {}, {}, {}, {}]
let trie = []
for (let i = 0; i < 10; i++) {
    let insertArray = [];
    for (let j = 0; j < i + 1; j++) {
        insertArray.push({});
    }
    trie.push(insertArray);
}

/// - ///

function solution (words) {
    let trie = []
    for (let i = 0; i < 10; i++) {
        let insertArray = [];
        for (let j = 0; j < i + 1; j++) {
            insertArray.push({});
        }
        trie.push(insertArray);
    }
    
    for (const word of words) {
        for (const index in word) {
            let letter = word[index];
            if(letter in trie[word.length -1][index][letter]) {
                trie[word.length-1][index][letter] += 1
            } else {
                trie[word.length-1][index][letter] = 1
            }
        }
    }

    return trie
}

solution(['frodo', 'front'])

/// - ///

class 노드 {
    constructor(){
        this.children = {}
        this.count = 0
    }
}

class 트라이 {
    constructor(){
        this.root = new 노드()
    }

    insertData(word){
        let current = this.root
        current.count += 1
        for (const s of word) {
            let child = current.children[s]

            if(!child) {
                child = new 노드()
                current.children[s] = child
            }

            child.count += 1
            current = child
        }
    }

    search(query){
        let current = this.root
        for (const q of query) {
            if(q === '?') {
                return current.count
            } else if (!current.children[q]){
                return 0;
            }
            current = current.children[q]
        }
    }
}

function solution(words, queries){
    answer = []
    
    const 트라이배열 = Array(11)
    const 트라이역배열 = Array(11)

    for (const word of words) {
        const 단어길이 = word.length
        const 트라이1 = 트라이배열[단어길이] ? 트라이배열[단어길이] : new 트라이()
        const 트라이2 = 트라이역배열[단어길이] ? 트라이역배열[단어길이] : new 트라이()
        트라이1.insertData(word)
        트라이2.insertData([...word].reverse().join(''))
        트라이배열[단어길이] = 트라이1
        트라이역배열[단어길이] = 트라이2
    }

    // console.log(트라이배열)
    // console.log(트라이역배열)

    for (const query of queries) {
        if (!트라이배열[query.length]){
            answer.push(0)
            continue
        }

        let count

        if(query[0] !== '?'){
            count = 트라이배열[query.length].search(query)
        } else {
            count = 트라이역배열[query.length].search([...query].reverse().join(''))
        }
        answer.push(count)
    }

    return answer
}