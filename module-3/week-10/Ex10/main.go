package main

import (
	"fmt"
	"time"
)

func main() {
	var tasks []string
	tasks = append(tasks, "Batata", "Cebola", "Banana")

	taskChan := make(chan []string)
	doneChan := make(chan bool)

	// Inicia a goroutine para exibir a quantidade de tarefas
	go showTaskCount(taskChan, doneChan)

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

			taskChan <- tasks
		case opt == 2:
			mostraLista(tasks)
		case opt == 3:
			mostraLista(tasks)

			var itemNum int
			fmt.Print("Digite o número do item que deseja remover: ")
			fmt.Scan(&itemNum)
			removeTask(&tasks, itemNum-1)

			taskChan <- tasks
		case opt == 4:
			mostraMenu()

		case opt == 5:
			doneChan <- true
			return
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
	fmt.Println("5 - Sair")
	fmt.Println("---------------------------")
}

func addItem(tasks *[]string, item string) {
	*tasks = append(*tasks, item)
}

func removeTask(tasks *[]string, n int) {
	*tasks = append((*tasks)[:n], (*tasks)[n+1:]...)
}

func showTaskCount(taskChan chan []string, doneChan chan bool) {
	for {
		select {
		case tasks := <-taskChan:
			fmt.Printf("Total de tarefas: %d\n", len(tasks))
		case <-doneChan:
			return
		}
		time.Sleep(5 * time.Second)
	}
}
