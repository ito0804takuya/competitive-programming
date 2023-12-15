// 1からNの番号がふられている一直線に並べられているN個のマスがある。
// 1から開始のマスとして、ゴールはNが書かれているマスとする。

// その場に書かれている数字の2進数で表現した時の1のビット数 だけ「前」または「後」に進めることができる。
// (1未満とN+1以上のマスには移動することは出来ない、正確にNにならないとゴールできない）

// 自然数Nを与えられた時、ゴールに到達できる最短の移動数（開始のマスへも移動にカウントする）を求めてください。
// 到達できない場合は-1を出力してください。

// 開始のマスがすでにゴールになっている場合もあリます。

package main

import (
	"fmt"
)

func main() {
	// ゴール
	var n int
	fmt.Scan(&n)

	// ゴールに到達する最短の移動数
	results := make([]int, n+1)
	results[1] = 1 // 開始のマスへも移動にカウントすることから

	que := []int{1}

	visited := make([]bool, n+1)
	visited[0] = true
	visited[1] = true

	for len(que) > 0 {
		// キューの先頭を取り出す
		i := que[0]
		que = que[1:]

		bit := countBits(uint(i))
		if bit == 0 {
			continue
		}

		// 前に進む
		next := i + bit
		if next <= n && !visited[next] {
			if next != n {
				que = append(que, next)
			}
			visited[next] = true
			results[next] = results[i] + 1
		}

		back := i - bit
		if back > 0 && back < n && !visited[back] {
			que = append(que, back)
			visited[back] = true
			results[back] = results[i] + 1
		}
	}

	// resultが0のときは、そこにたどり着いたことがない（たどり着けない）ということなので、指定の-1を出力
	if results[n] == 0 {
		results[n] = -1
	}

	fmt.Println(results[n])
}

// 数値を2進数に変換した際の'1'の数を返す
func countBits(num uint) int {
	count := 0
	for num > 0 {
		count += int(num & 1) // 最下位ビットを1とAND演算（→ 1であれば1を、0であれば0を返す）
		num >>= 1             // 1ビット右にシフト
	}
	return count
}
