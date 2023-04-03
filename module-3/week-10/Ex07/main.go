package main

import "time"

func main() {
	canal := make(chan int)

	go contar(canal)


	// Forma mais simples:

	for num := range canal {
		println(num)
	}


	// Forma alternativa:

	// for {

	// 	// isOpen(nome opicional) serve para verificar se o canal ainda está aberto, evitando deadlock.
	// 	num, isOpen := <-canal

	// 	if !isOpen {
	// 		break
	// 	}

	// 	println(num)
	// }
}

func contar(canal chan int) {
	for i := 1; i <= 10; i++ {
		canal <- i
		time.Sleep(time.Second)
	}

	close(canal)
}