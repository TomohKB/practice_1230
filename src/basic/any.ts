export default function anySample() {
    let name: any = 'Torahack' //string型を代入
    console.log('anySample 1:', typeof name, name)

    name = 28
    console.log('anySample 2:', typeof name, name)
}