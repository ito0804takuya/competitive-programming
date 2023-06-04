package main

import (
	"fmt"
)

func countDivision(num int) int {
	count := 0
	// & はビット演算のANDなので、num&1 は1とのANDになる。つまり、numの最下位ビットと1をAND演算している。
	// それが1になる場合（0と等しくない場合）は、numは奇数である。
	// なので、for num&1 == 0 は numが偶数である限りループ処理する ということ。
	for num&1 == 0 {
		// >>= は（ビット演算の）右シフト演算子。ビット全体を右にズラして、最下位ビットを押し出すことで、
		// numを2で割ったことになる。ビット演算なので高速。
		num >>= 1
		// 2で割れた回数 をカウントアップ
		count++
	}
  return count
}

func main() {
	// n : 渡される数値の数
	var n int
	fmt.Scan(&n)

	// 渡される数値全体で、2で割れる回数の最小値
	// （初期値を、当初は無限大にしていたが、1.14.1ではmath.Infが使えないため、問題の制約であるnumの最大値 10^9で設定）
	minCount := int(1e9)

	// n個の入力を受け取るための配列
	nums := make([]int, n)
	for _, num := range nums {
		fmt.Scan(&num)

		// 2で何回割れるか
		count := countDivision(num)

		if minCount > count {
      minCount = count
		}

		// 0より小さくなることは無いので、0という結果になった場合は以降の入力は無視して、処理を終了する（0と出力する）
		if minCount == 0 {
			break
		}
	}

	fmt.Println(minCount)
}
