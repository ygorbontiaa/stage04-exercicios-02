/* 
  solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

  - A soma dos dois números;
  - A subtração dos dois números;
  - A multiplicação dos dois números;
  - A divisão dos dois números;
  - O resto da divisão dos dois números;

  - Verifique se a soma dos dois números é par (ou ímpar)
  - Verifique se os dois números inseridos são iguais (ou diferentes) 
*/

let numberOne, numberTwo
numberOne = Number(prompt('Digite o primeiro número'))
numberTwo = Number(prompt('Digite o segundo número'))

let sum, sub, multi, div, restDiv
sum = numberOne + numberTwo
sub = numberOne - numberTwo
multi = numberOne * numberTwo
div = (Number(numberOne / numberTwo).toFixed(2))
restDiv = numberOne % numberTwo

alert(`O resultado da soma dos dois números é: ${sum}`)
alert(`O resultado da subtração dos dois números é: ${sub}`)
alert(`O resultado da multiplicação dos dois números é: ${multi}`)
alert(`O resultado da divisão dos dois números é: ${div}`)
alert(`O resultado do resto da divisão entre dois números é: ${restDiv}`)

let pair, equal
pair = sum % 2 == 0
equal = numberOne == numberTwo

if (pair) {
  alert('A soma dos dois números é par')
} else {
  alert('A soma dos dois números é ímpar')
}

if (equal) {
  alert('O primeiro número é igual ao segundo número')
} else {
  alert('O primeiro número não é igual ao segundo número')
}