package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	c := make(chan int)

	for i := 1; i <= 10; i++ {
		go func(i int) {
			time.Sleep(time.Duration(rand.Intn(1000)) * time.Millisecond)

			c <- i
		}(i)
	}

	for i := 1; i <= 10; i++ {
		fmt.Println(<-c)
	}
}
