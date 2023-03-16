package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	var input string
	fmt.Println("Digite uma frase:")
	scanner := bufio.NewScanner(bufio.NewReader((os.Stdin)))
	if scanner.Scan() {
		input = scanner.Text()
	}

	words := strings.Fields(input)
	freq := make(map[string]int)

	for _, word := range words {
		freq[strings.ToLower(word)]++
	}

	fmt.Println("Palavras repetidas:")
	for word, count := range freq {
		if count > 1 {
			fmt.Printf("%s: %d\n", word, count)
		}
	}
}
