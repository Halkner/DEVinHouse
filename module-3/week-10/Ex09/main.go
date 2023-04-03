package main

import (
	"fmt"
)

func main() {
	var tasks []string
	tasks = append(tasks, "Batata", "Cebola", "Banana")

	mostraMenu()
	for {
		var opt uint8
		fmt.Scan(&opt)

		switch {
		case opt == 1:
			var newItem string
			fmt.Print("Que item deseja adicionar? - ")
			fmt.Scan(&newItem)
			addItem(&tasks, newItem)
		case opt == 2:
			mostraLista(tasks)
		case opt == 3:
			mostraLista(tasks)

			var itemNum int
			fmt.Print("Digite o número do item que deseja remover: ")
			fmt.Scan(&itemNum)
			removeTask(&tasks, itemNum-1)
		case opt == 4:
			mostraMenu()
		default:
			fmt.Println("Opção inválida, tente novamente!")
		}

		mostraMenu()
	}

}

func mostraLista(tasks []string) {
	println("========/ TAREFAS /========")
	for i := 0; i < len(tasks); i++ {
		fmt.Printf("%d - %s\n", i+1, tasks[i])
	}
	fmt.Println("---------------------------")
}

func mostraMenu() {
	fmt.Println("=========/ MENU /==========")
	fmt.Println("1 - Adicionar item")
	fmt.Println("2 - Mostrar lista de tarefas")
	fmt.Println("3 - Remover item")
	fmt.Println("4 - Mostrar menu novamente")
	fmt.Println("---------------------------")
}

func addItem(tasks *[]string, item string) {
	*tasks = append(*tasks, item)
}

func removeTask(tasks *[]string, n int) {
	*tasks = append((*tasks)[:n], (*tasks)[n+1:]...)
}
