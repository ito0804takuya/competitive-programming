package main

import (
	"fmt"
)

func main() {
	// 入力受け取り
	var n, y int
	fmt.Scan(&n, &y)

	// 絶対に成立しないパターンと、1つの種類をN枚にしたら成立するパターンだけ、先に調べる
	switch {
	case y == 10_000*n:
		fmt.Println(n, 0, 0)
		return
	case y > 10_000*n:
		fmt.Println(-1, -1, -1)
		return
	case y == 5_000*n:
		fmt.Println(0, n, 0)
		return
	case y == 1_000*n:
		fmt.Println(0, 0, n)
		return
	case y < 1_000*n:
		fmt.Println(-1, -1, -1)
		return
	}

	// 連立方程式より、9a + 4b = y/1000 - n
	// なので、a = (y/1000 - n - 4b) / 9
	// bに1→n未満まで入れて、そのときのaが整数 かつ aとbとn-a-bをかけた価がyと等しいか を調べる
	for i := 1; i < n; i++ {
		b := i
		if (y/1000-n-4*b)%9 != 0 {
			continue
		}
		a := (y/1000 - n - 4*b) / 9
		c := n - a - b
		if c < 0 {
			continue
		}

		if y == 10_000*a+5_000*b+1_000*c {
			fmt.Println(a, b, c)
			return
		}
	}

	// 調べてもダメだったとき
	fmt.Println(-1, -1, -1)
	return
}
