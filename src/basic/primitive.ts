export default function primitiveSample() {
    let name: string = 'トラハック'; // 型をstringにし、初期値を代入
    // name = 123
    console.log("primitiveSample 1:", typeof name, name);
}

let age: number = 28
console.log('primitiveSample 2:', typeof age, age)

let isSingle: boolean = true
// isSingle = "foo"
console.log('primitiveSample 3:', typeof isSingle, isSingle)

const isOver20: boolean = age >= 20
console.log('primitiveSample 4:', typeof isOver20, isOver20)

