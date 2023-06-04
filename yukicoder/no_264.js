var no264;
(function (no264) {
    function Main(input) {
        // 入力の１つ目に自分の手、２つ目に相手の手が与えられている
        var input_nums = input.split(' ').map(function (str) { return parseInt(str, 10); });
        var win_lose_rules = [
            // ぐー: 0, ちょき: 1, ぱー: 2
            { myHand: 0, enemyHand: 0, result: "Drew" },
            { myHand: 0, enemyHand: 1, result: "Won" },
            { myHand: 0, enemyHand: 2, result: "Lost" },
            { myHand: 1, enemyHand: 0, result: "Lost" },
            { myHand: 1, enemyHand: 1, result: "Drew" },
            { myHand: 1, enemyHand: 2, result: "Won" },
            { myHand: 2, enemyHand: 0, result: "Won" },
            { myHand: 2, enemyHand: 1, result: "Lost" },
            { myHand: 2, enemyHand: 2, result: "Drew" },
        ];
        var matchResult = win_lose_rules.find(function (rule) { return rule.myHand === input_nums[0] && rule.enemyHand === input_nums[1]; });
        // ここの型ガードは本来、Ruleであるかどうかをチェックすべき。（時間がかかるので今は省略した）
        if (typeof matchResult !== "undefined") {
            console.log(matchResult.result);
        }
    }
    Main(require("fs").readFileSync("/dev/stdin", "utf8"));
})(no264 || (no264 = {}));
