namespace no143 {

  function Main(input: string): void {
    const inputArr: string[] = input.split('\n');

    const firstLine: string[] = inputArr[0].split(' ');
    // 豆の総数
    const totalBeans: number = parseInt(firstLine[0]) * parseInt(firstLine[1]);

    // 豆を食べる総数（家族全員の年齢の和）
    const eatBeans: number =  inputArr[1].split(' ').reduce( (sum, str) => sum + parseInt(str), 0);

    // 食べた後に余った豆の数
    const surplusBeans: number = totalBeans - eatBeans;

    console.log(surplusBeans >= 0 ? surplusBeans : -1);
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}