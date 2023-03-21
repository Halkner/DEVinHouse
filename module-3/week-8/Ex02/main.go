package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
    fmt.Print("Digite uma palavra/frase: ")
    scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()
    entrada := scanner.Text()
	tamanho := len(entrada)

    fmt.Println("O tamanho da palavra/frase é:", tamanho)
}
