package main

import "fmt"

func main() {
	// 寿司（皿）の数
	var n int
	fmt.Scan(&n)

	// 寿司の数分、美味しさ値を受け取る
	nums := make([]int, n)
	for i := 0; i < n; i++ {
		fmt.Scan(&nums[i])
	}

	fmt.Println(maxSum(nums))
}

func maxSum(nums []int) int {
	// すぐわかる状況ならすぐに回答する
	if len(nums) == 0 { // 空配列
		return 0
	}
	if len(nums) == 1 { // 1枚
		return nums[0]
	}

	// inputと同じ長さのスライスを作る
	dp := make([]int, len(nums))
	// 配列の1番目には、最初の美味しさ値 を格納
	dp[0] = nums[0]
	// 配列の2番目には、その1つ前の美味しさ値と比べて大きい方 を格納
	dp[1] = max(nums[0], nums[1])

	for i := 2; i < len(nums); i++ {
		// dpに格納している（=これまで最大値比較で勝ち抜いてきたものたち）うちの1つ前のもの か 
		// 今新しく与えられた美味しさ値+その2個前のものを選択したもの のどちらか大きい方を選択する
		dp[i] = max(dp[i-1], dp[i-2]+nums[i])
	}

	// doの末尾は、最終的に勝ち残った価なので、それが美味しさ値の最大
	return dp[len(nums)-1]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}