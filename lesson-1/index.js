const colors = require('colors')

const getVal = process.argv[2]
const colorsArr = [colors.green, colors.yellow, colors.red]

const primeNumbers = (n) => {
  let primeArr = []
  for (let i = 2; i <= n; i++) {
    primeArr.push(i)
  }
  return primeArr
}

const isNumber = () => !isNaN(getVal)

if (!isNumber(getVal)) {
  console.log('Введите числовое значение')
} else {
  let result = primeNumbers(parseInt(getVal))
  if (result.length == 0) {
    console.log(colorsArr[0](`Не простое число ${getVal}`))
  }
  let j = 0
  result.forEach((item) => {
    console.log(colorsArr[j](item))
    j = j + 1 == 3 ? 0 : j + 1
  })
}
