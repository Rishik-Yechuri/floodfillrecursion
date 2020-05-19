var readline = require('readline')
var fs = require('fs')
var questionToAsk = ""
let height = 0
let width = 0
input = ""
var a = new Array(1)
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const question1 = () => {
    return new Promise((resolve, reject) => {
        r1.question(questionToAsk, (answer) => {
            input = answer
            resolve()
        })
    })
}
const main = async () => {
    await question1()
    var dimensions = input.split(" ")
    height = parseInt(dimensions[0], 10)
    width = parseInt(dimensions[1], 10)
    a = new Array(height.valueOf());
    await question1()
    let yLocation = parseInt(input,10)
    await question1()
    var xLocation = parseInt(input,10)
    for (var i = 0; i < a.length; i++) {
        a[i] = new Array(width);
    }
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            await question1()
            a[y][x] = input
        }
    }
    let arraytoreturn = fillArray(a, yLocation,xLocation)
    console.log(arraytoreturn)
    r1.close()
}
main()

function fillArray(array, y, x) {
    array[y][x] = 'w'
    if (x + 1 < array[0].length) {
        if (array[y][x + 1] !== 'b' && array[y][x+1] !== 'w') {
            array[y][x + 1] = "w"
            array = fillArray(array, y, x + 1)
        }
    }
    console.log("look left")
    if (x - 1 > -1) {
        console.log("left there")
        if (array[y][x - 1] !== 'b' && array[y][x - 1] !== 'w') {
            console.log("left")
            array[y][x - 1] = "w"
            array = fillArray(array, y, x - 1)
        }
    }
    if (y + 1 < array.length) {
        if (array[y + 1][x] !== 'b' && array[y + 1][x] !== 'w') {
            array[y + 1][x] = 'w'
            array = fillArray(array, y + 1, x)
        }
    }
    if (y - 1 > -1) {
        if (array[y - 1][x] !== 'b' && array[y - 1][x] !== 'w') {
            array[y - 1][x] = "w"
            array = fillArray(array, y - 1, x)
        }
    }
    return array
}