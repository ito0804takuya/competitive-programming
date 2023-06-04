function Main(input) {
  const nums = input.split(' ').map(str => parseInt(str, 10));
  console.log(Math.ceil(nums[1] / nums[0]));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));