package main

import "fmt"

func main(){
	var fruits = map[string]string{
		"maca":     "é uma fruta que cresce em arvore",
		"banana":   "é uma fruta amarela",
		"morango":  "O morango é uma fruta vermelha, cuja origem é a Europa",
		"melancia": "A melancia é uma fruta rasteira, originária da África",
	}

	founded := false
	for key, value := range fruits{
		if key == "morango"{
			founded = true
			fmt.Println(key, " - ", value)
			break
		}
	}

	if !founded{
		fmt.Println("Não foi encontrada a fruta morango.")
	}
}