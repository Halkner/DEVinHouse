package main

import "fmt"

func fatorial(n int) int {
    if n == 0 {
        return 1
    }
    f := 1
    for i := 1; i <= n; i++ {
        f *= i
    }
    return f
}

func main() {
    var num int
    fmt.Print("Digite um número inteiro positivo: ")
    fmt.Scanln(&num)

    fmt.Printf("O fatorial de %d é %d\n", num, fatorial(num))
}
