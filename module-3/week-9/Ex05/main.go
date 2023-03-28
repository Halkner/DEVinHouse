package main

import "fmt"

func main(){
	fmt.Print("Digite uma palavra para concatenar: ")
	var word1 string
	fmt.Scan(&word1)

	fmt.Print("Digite outra palavra para concatenar: ")
	var word2 string
	fmt.Scan(&word2)

	stringConcatenada := word1 + word2

	fmt.Print(stringConcatenada)
}