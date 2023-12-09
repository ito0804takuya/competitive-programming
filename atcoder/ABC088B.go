package main

import (
	"fmt"
	"sort"
)

func main() {
	// 入力受け取り
	var n int
	fmt.Scan(&n)

	nums := make([]int, n)
	for i := range nums {
		fmt.Scan(&nums[i])
	}
	sort.Sort(sort.Reverse(sort.IntSlice(nums))) // 降順にソート

	result := 0

	for i, v := range nums {
		if i%2 == 0 {
			result += v // Alice
		} else {
			result -= v // Bob
		}
	}

	fmt.Println(result)
}