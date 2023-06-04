namespace no388 {
  function Main(input: string): void {
    const nums = input.split(' ').map(str => parseInt(str, 10));
    console.log(Math.floor(nums[0] / nums[1]) + 1);
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}