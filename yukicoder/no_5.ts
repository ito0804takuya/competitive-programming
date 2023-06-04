namespace no5 {

  function Main(input: string): void {
    const inputArr: string[] = input.split('\n');

    const boxWidth: number = parseInt(inputArr[0]);
    const blocksWidth: number[] = inputArr[2].split(' ')
      .map(str => parseInt(str))
      .sort((a, b) => a - b);

    let sum = 0;
    // 何個入るか をindexを使って表現したいが、ループ途中でbreakもしたいのでArray.forEach()が使えない
    // そのため、　for of + Object.entries()を採用
    for (const [index, blockWidth] of Object.entries(blocksWidth)) {
      // （途中のブロックや最後のブロックが）箱に収まらなかったとき or 最後のブロックが収まったとき
      // 箱に収まるブロック数を出力
      sum += blockWidth;
      if (sum > boxWidth) {
        console.log(parseInt(index));
        break;
      }

      if (parseInt(index) + 1 == blocksWidth.length) {
        console.log(blocksWidth.length);
        break;
      }
    }
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}