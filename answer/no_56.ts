namespace no56 {

  function Main(input: string): void {
    const inputArr: number[] = input.split(' ').map(str => parseInt(str));
    
    // 本来は1.で計算したいが、小数点以下の計算を行う歳の丸め誤差により計算結果が狂うため、2.で計算
    // 1. 価格[円] * (1 + 消費税率/100[%]) = 価格[円] + (価格[円] * 消費税率/100[%])
    // 2. ( 価格[円] * (100 + 消費税率)[% * 100] )[円 * 100] / 100
    //   → 小数点を持つ数値での演算は避け、最後に1/100してそれ以降は演算しないことで、誤差を回避
    const amount: number = (inputArr[0] * (100 + inputArr[1])) / 100;

    console.log( Math.floor(amount) ); // 小数点以下切り捨て
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}