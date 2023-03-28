package main

import "fmt"

func main(){
	var numbers []int
	var aux = 0

	for{
		var input int

		fmt.Print("Enter a number (0 = stop): ")
		fmt.Scan(&input)

		if input == 0 {
			break
		}

		numbers = append(numbers, input)

		if input > aux{
			aux = input
		}
	}

	fmt.Println("Numbers: ", numbers)
	fmt.Println("Highest number: ", aux)
}