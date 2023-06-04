function Main(input) {
    var nums = input.split(' ').map(function (str) { return parseInt(str, 10); });
    console.log(Math.floor(nums[0] / nums[1]) + 1);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
