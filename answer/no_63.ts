namespace no63 {

  function Main(input: string): void {
    const inputArr: number[] = input.split(' ').map(str => parseInt(str));
    const totalLength = inputArr[0];
    const eatLength = inputArr[1];

    // かじることができる回数の合計（2人分）
    const eatableCount = totalLength / eatLength;

    // 1人が平等にかじる回数
    const eatableCountPerson = Math.floor(eatableCount / 2);

    // かじる回数がちょうど2人で割り切れる場合は、そのままかじると接触してしまうので、
    // ユウちゃんはその手前でかじるのを止める。そのため、その場合は1回少ない。
    const eatableCountYuu = eatableCount % 2 == 0 ? eatableCountPerson - 1 : eatableCountPerson;

    // ユウちゃんが食べた長さ
    console.log(eatLength * eatableCountYuu);
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}