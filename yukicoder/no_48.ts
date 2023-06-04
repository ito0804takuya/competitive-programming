namespace no48 {

  function Main(input: string): void {
    const inputs: number[] = input.split('\n').map(str => parseInt(str));
    // 移動先の東西軸座標X（東が正）
    const targetX = Math.abs(inputs[0]);
    // 移動先の南北軸座標Y（北が正）
    const targetY = inputs[1];
    // 前進可能距離L
    const maxRange = inputs[2];

    let orderCountY = 0;
    let orderCountX = 0;

    // 初期状態：(0, 0)の座標に立っていて北の方向を向いている。
    if (targetY >= 0) {
      // Y方向が0以上なら、北への前進から処理して、90°回転
      orderCountY = Math.ceil(targetY / maxRange);
      
      // X方向が0なら方向転換が不要なのでチェック
      if (targetX != 0) {
        orderCountX = Math.ceil(targetX / maxRange) + 1;
      }
    } else {
      // Y方向が負なら、まず90°回転してX方向から処理し、その後90°回転して南へ前進
      orderCountX = Math.ceil(targetX / maxRange) + 1;
      orderCountY = Math.ceil(Math.abs(targetY) / maxRange) + 1;
    }

    // ロボットが移動先に到達するまでに必要な最小の命令回数
    console.log(orderCountX + orderCountY);
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}