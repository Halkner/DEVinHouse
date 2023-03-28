package main

import "fmt"

func main() {
	var numbers []int

	//Preenche o array com numeros de 0 a 100
	for i := 0; i <= 100; i++ {
		numbers = append(numbers, i)
	}

	var primeNumbers []int

	//Percorre o array
	for i := 0; i < len(numbers); i++ {
		isPrime := true

		//Verifica se o número é primo
		for j := 2; j <= numbers[i]/2; j++{
			// Se o resto da divisão pelo iteravel 'j' for 0 então não é primo.
			if numbers[i] % j == 0{
				isPrime = false
				break
			}
		}

		// Se for diferente de zero então é primo.
		if isPrime{
			primeNumbers = append(primeNumbers, numbers[i])
		}

	}

	fmt.Print("Números primos: ", primeNumbers)
}
