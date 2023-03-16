package main

import (
    "bufio"
    "fmt"
    "os"
	"strings"
)

func main() {
    fmt.Print("Digite uma palavra/frase: ")
    scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()
    entrada := scanner.Text()
	entrada = strings.Title(entrada)

    fmt.Println("Palavra/frase capitalizada:", entrada)
}