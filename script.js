let num1 = Number(prompt("Digite o primeiro numero"))
let num2 = Number(prompt("Digite o segundo numero"))



alert(`A soma dos dois numero é: ${(num1 + num2)}`)
alert(`A subtração dos dois numero é: ${(num1 - num2)}`)
alert(`A multiplicação dos dois numero é: ${(num1 * num2)}`)
alert(`A divisão dos dois numero é: ${(num1 / num2).toFixed(2)}`)
alert(`O resto da divisão dos dois numero é: ${(num1 % num2)}`)

if ((num1 + num2) % 2 == 0) {
    alert(`A soma dos dois numero é par: ${num1 + num2}`)
} else {
    alert(`A soma dos dois numero é impar: ${num1 + num2}`)
}

if (num1 == num2) {
    alert(`Os numeros digitados são iguais ${num1}, ${num2}`)
} else {
    alert(`Os numeros digitados são diferentes ${num1}, ${num2}`)
}
