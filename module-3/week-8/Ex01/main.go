package main

import "fmt"

func main() {
    var num1, num2 int

    fmt.Print("Digite o primeiro número: ")
    fmt.Scanln(&num1)

    fmt.Print("Digite o segundo número: ")
    fmt.Scanln(&num2)

    soma := num1 + num2
    diferenca := num1 - num2

    fmt.Println("A soma é:", soma)
    fmt.Println("A diferença é:", diferenca)
}