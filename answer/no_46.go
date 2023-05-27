package main

import (
	"fmt"
	"math"
)

func main() {
	// 標準入力から受け取る
	var a, b int
	fmt.Scan(&a, &b)

	// 商を繰り上げ（math.Ceilにはintを渡せないためfloatにキャスト）
	fmt.Println(math.Ceil(float64(b) / float64(a)))

	// NOTE: 下記のコードでは、例えば 5 / 2 = 2.5 -> 切り上げて 3 という結果を得たい場合においても、
	// Goの仕様上、5 / 2 = 2 となってしまい、それをfloatにキャストして切り上げるため、結果が 2 になってしまう。
	// fmt.Println(math.Ceil(float64(b / a)))
}
