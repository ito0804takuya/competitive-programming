namespace no289 {

  function Main(input: string): void {
    const nums = input.match(/\d/g);
    if (!!nums) {
      console.log(nums.reduce( (sum, str) => sum + parseInt(str), 0 ));
    } else {
      console.log(0);
    }
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}