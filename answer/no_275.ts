namespace no275 {

  function Main(input: string): void {
    // 入力（2行）を受け取り、扱いやすいように処理
    const inputArr = input.split('\n');
    const numCount = parseInt(inputArr[0], 10);
    const nums = inputArr[1].split(' ')
                            .map(str => parseInt(str, 10))
                            .sort((a, b) => a - b);

    // 数値の数が偶数なら、中央に近い2つの値（length/2 番目とその1つ後ろ)の平均
    //         奇数なら、中央値の切り下げ 番目の値
    let median = 0;
    if (numCount % 2 == 0) {
      median = (nums[(numCount / 2) - 1] + nums[numCount / 2]) / 2
    } else {
      median = nums[Math.floor(numCount / 2)];
    }

    // 少数第一位までにする（10倍した数で四捨五入して、それを1/10して少数桁を1つだけ作る）
    console.log(Math.round(median * 10) / 10);
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}