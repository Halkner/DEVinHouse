package main

import "fmt"

type book struct {
	title         string
	author        string
	publishedYear string
	pages         int16
}

func main() {

	b1 := book{"Lord Of The Rings", "Tolkien", "1954", 1200}

	fmt.Println(b1)

}