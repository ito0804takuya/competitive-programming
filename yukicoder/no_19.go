package main

import (
	"fmt"
)

// この解法で解けはするが、時間切れになった
// 動的計画法(dp)じゃないといけなさそう
func main() {
	var n int
	fmt.Scan(&n)

	weights := make([]int, n)
	for i := range weights {
		fmt.Scan(&weights[i])
	}

	// すべてのおもりを使用して天秤が水平になる組み合わせがあるかどうかを判定
	if findBalance(weights, 0, 0, 0) {
		fmt.Println("possible")
	} else {
		fmt.Println("impossible")
	}
}

// 天秤が水平になるおもりの組み合わせが存在するかどうかを判定する関数
func findBalance(weights []int, leftSum, rightSum, index int) bool {
	if index == len(weights) {
		// 全てのおもりを使用した場合、左右の合計が等しいかどうかを確認
		return leftSum == rightSum
	}

	// 現在のおもりを左に置いた場合
	if findBalance(weights, leftSum+weights[index], rightSum, index+1) {
		return true
	}

	// 現在のおもりを右に置いた場合
	if findBalance(weights, leftSum, rightSum+weights[index], index+1) {
		return true
	}

	return false
}
