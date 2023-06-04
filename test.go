package main

import (
	"fmt"
)

type Item struct {
	Weight int
	Value  int
}

func chmax(a *int, b int) {
	if *a < b {
		*a = b
	}
}

func maxValue(items []Item, maxWeight int) int {
	// value[i][w] : 重さ w 以内に収まる中で、i 番目の品物を選んだときの総価値
	// 必要な要素数が格納できる2次元配列を作る。（各要素の値はすべて0）
	value := make([][]int, len(items)+1)
	for i := range value {
		value[i] = make([]int, maxWeight+1)
	}

	for i, item := range items {
		for w := 0; w <= maxWeight; w++ {
			if w-item.Weight >= 0 {
				// 制限値 w 以内の品物なので、その品物を選ぶ可能性を検討する。
				// その品物を選ばなかったときの価値 vs 選んだときの価値 で高い方を、
				// 制限値w・i番目までの品物における最大価値として、valueにメモする。
				chmax(&value[i+1][w], value[i][w-item.Weight]+item.Value)
			}
			// 制限値wを超える品物なのでその品物自体は選ばない。ただ、そのことをvalueにメモはする。
			chmax(&value[i+1][w], value[i][w])
		}
	}

	// 2次元配列の末尾の要素が、戦いに勝ち抜いた[最大価値]なので、それを返す。
	return value[len(items)][maxWeight]
}

func main() {
	// 品物（重さ, 価値）
	items := []Item{
		{Weight: 2, Value: 3},
		{Weight: 1, Value: 2},
		{Weight: 3, Value: 6},
		{Weight: 2, Value: 1},
		{Weight: 1, Value: 3},
		{Weight: 5, Value: 85},
	}

	// fmt.Println(maxValue(items, 5)) // 重さの制限を5にしたときの最大価値
	// fmt.Println(maxValue(items, 10))
	fmt.Println(maxValue(items, 15))
}
