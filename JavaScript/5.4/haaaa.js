Array(100).fill(0).map((_,index)).filter(i=>i%3 ==0)

let s = 0
Array(100).fill(0).map((_, index)=>index).filter(i => i % 3 ==0 || i % 5 == 0).forEach(x => s += x)
