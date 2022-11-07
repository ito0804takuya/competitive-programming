
namespace no264 {
  function Main(input: string): void {
    // 入力の１つ目に自分の手、２つ目に相手の手が与えられている
    const input_nums: number[] = input.split(' ').map(str => parseInt(str, 10));

    type Rule = { myHand: number, enemyHand: number, result: string };

    const win_lose_rules: Rule[] = [
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

    const matchResult: Rule | undefined = win_lose_rules.find(rule => rule.myHand === input_nums[0] && rule.enemyHand === input_nums[1]);

    // ここの型ガードは本来、Ruleであるかどうかをチェックすべき。（時間がかかるので今は省略した）
    if (typeof matchResult !== "undefined") {
      console.log(matchResult.result);
    }
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}
