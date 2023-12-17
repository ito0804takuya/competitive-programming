// 問題解決力を鍛える アルゴリズムとデータ構造
// 5.5 編集距離

package main

import (
	"fmt"
	"math"
	"strings"
)

func chmin(a *int, b int) {
	if *a > b {
		*a = b
	}
}

func main() {
	var s, t string
	// s = "bag"
	// t = "big"
	s = "logistic"
	t = "algorithm"

	sArr := strings.Split(s, "")
	tArr := strings.Split(t, "")


	dp := make([][]int, len(sArr)+1)
	for i := range dp {
		dp[i] = make([]int, len(tArr)+1)
		for j := range dp[i] {
			dp[i][j] = math.MaxInt32
		}
	}

	dp[0][0] = 0

	for i := 0; i <= len(sArr); i++ {
		for j := 0; j <= len(tArr); j++ {
			if (i>0 && j>0) {
				// 文字が一致していたら、操作数は増えない
				if (sArr[i-1] == tArr[j-1]) {
					chmin(&dp[i][j], dp[i-1][j-1])
				} else {
					chmin(&dp[i][j], dp[i-1][j-1]+1)
				}
			}
			if i > 0 {
				chmin(&dp[i][j], dp[i-1][j]+1)
			}
			if j > 0 {
				chmin(&dp[i][j], dp[i][j-1]+1)
			}
		}
	}

	fmt.Println(dp, dp[len(sArr)][len(tArr)])
}
