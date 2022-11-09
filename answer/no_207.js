var no207;
(function (no207) {
    function Main(input) {
        var inputNums = input.split(' ').map(function (str) { return parseInt(str, 10); });
        // inputNumsの「1つ目の値以上、2つ目の値以下」の連番の配列を作り、それらをチェックする
        // （lengthに1を足す理由：「1つ目の値より上」でなく「1つ目の値以上」なため）
        var checkNums = Array.from({ length: inputNums[1] - inputNums[0] + 1 })
            .map(function (_, k) { return k + inputNums[0]; });
        checkNums.forEach(function (num) { return outputRelateThreeNum(num); });
    }
    // 3の倍数 or 3の付く数 の場合、標準出力
    function outputRelateThreeNum(num) {
        if (num % 3 === 0 || isIncludeThree(num)) {
            console.log(num);
        }
    }
    function isIncludeThree(num) {
        return String(num).split("").includes("3");
    }
    Main(require("fs").readFileSync("/dev/stdin", "utf8"));
})(no207 || (no207 = {}));
