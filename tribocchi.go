package main

import (
    "fmt"
)

func tribo(n int, memo []int) int { 
    if n == 0 || n == 1 {
        return 0
    }
    if n == 2 {
        return 1
    }
    if memo[n] != 0 {
        return memo[n]
    }

    memo[n] = tribo(n-3, memo) + tribo(n-2, memo) + tribo(n-1, memo)
    return memo[n]
}


func main() {
    var n int
    // fmt.Scan(&n)
    n = 9

    memo := make([]int, n+1)
    fmt.Println(tribo(n, memo))
}