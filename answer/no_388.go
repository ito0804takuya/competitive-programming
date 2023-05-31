package main

import "fmt"

func main() {
	var step, floor_steps int
	fmt.Scan(&step, &floor_steps)

	// NOTE: Goの仕様上、int同士の割り算は切り捨てになる
	fmt.Println(1 + step/floor_steps)
}