package main

import "fmt"

type address struct {
	street  string
	city    string
	state   string
	zipCode string
}

type person struct {
	name    string
	age     int8
	address address
}

func main() {
	a1 := address{"Jiripoca", "Jaboatão", "AC", "99999-99"}
	p1 := person{"Rolandinho", 111, a1}

	fmt.Println(p1)
}
