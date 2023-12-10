package main

import (
	"fmt"
	"golang.org/x/exp/slices"
)

func main() {
	var n int
	fmt.Scan(&n)

	nums := make([]int, n)
	for i := range nums {
		fmt.Scan(&nums[i])
	}

	slices.Sort(nums)
	fmt.Println(len(slices.Compact(nums)))
}