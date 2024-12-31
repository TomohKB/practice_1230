export default function notExistSample() {
    let name = null
    console.log('notExistSample 1:', typeof name, name)

    name = "torahack" 
    if(name === null) {
        console.log('notExistSample 2:', "吾輩は猫である。名前は"+name)
     } else {
        console.log('notExistSample 3:', '吾輩は猫である。名前はまだ' + name)
     }

    let age = undefined
    console.log('notExistSample 4:', typeof age, age)

    age = 28
    if(!age) {
        console.log('notExistSample 5:', "年齢は秘密です")
    } else {
        console.log('notExistSample 6:', "年齢は"+age + "です")
    }
}