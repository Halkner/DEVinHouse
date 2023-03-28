package main

import "fmt"

func main() {
	var numbers []int
	soma := 0

	for{
		var input int
		fmt.Print("Enter a number (0 = stop): ")
		fmt.Scan(&input)
		if input == 0 {
			break
		}
		numbers = append(numbers, input)

		soma += input
	}

	fmt.Println("Numbers: ", numbers)
	fmt.Println("Sum: ", soma)
}