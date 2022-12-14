namespace no481 {

  function Main(input: string): void {
    const nums: number[] = input.split(' ').map(str => parseInt(str));

    for (let num = 1; num <= 10; num++) {
      if (!nums.includes(num)) {
        console.log(num);
        break;
      }
    }
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}