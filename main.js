alert("Hola, Lee la consola")

/* Se cambia name por nombre, por estar en deshuso */
let nombre = "Diego"
let lastName = "Arriagada"
console.log(nombre, lastName)

const info = "2 let con 1 console log, y este mensaje con const"
console.log(info)

/*  Practica funcion suma*/
/*function suma(num1, num2) {
  return num1 + num2
}
console.log(suma(1, 4))*/

/*practica let suma*/
let total = 0
function suma(num1, num2) {
    total = total + num1 + num2
  return total
}
console.log(suma(3, 8))
console.log(suma(3, 8))
console.log(suma(3, 8))
console.log(suma(3, 8))
console.log(suma(3, 8))

//recursividad
//cálculo factorial de un numero entero
//factorial de 5 = 5*4*3*2*1=120

/*function factorial(num) {
  let fact = num;
  for (let i = num - 1; i > 0; i = i - 1) {
    fact = fact * i
  }
  return fact
}
console.log(factorial(5))*/

function factorial_rec(num) {
  if (num === 1) return 1
  return num * factorial_rec(num - 1)
}
console.log(factorial_rec(5))