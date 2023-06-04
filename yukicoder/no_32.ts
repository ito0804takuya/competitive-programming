namespace no32 {
  type Currency = { yen1000: number, yen100: number, yen25: number, yen1: number };

  function Main(input: string): void {
    // 硬貨の枚数 [100円硬貨, 25円硬貨, 1円硬貨]
    const inputCoins: number[] = input.split(/\r\n|\n/).map(str => parseInt(str, 10));

    // 変数名をcoinsからcurrenciresに変更
    const money: Currency = {
      yen1000: 0,
      yen100: inputCoins[0],
      yen25: inputCoins[1],
      yen1: inputCoins[2]
    };

    // 換金
    const exchangedMoney: Currency = exchangeLargeCurrency(money);
    // 1000円札は除外する要件なので、0枚に置き換える
    exchangedMoney.yen1000 = 0;
    console.log(Object.values(exchangedMoney).reduce((sum, num) => sum + num, 0));
  }

  // 大きい通貨に換金する
  function exchangeLargeCurrency(money: Currency): Currency {
    let exchangedMoney: Currency = exchangeCurrency(money, 1, 25);
    exchangedMoney = exchangeCurrency(exchangedMoney, 25, 100);
    exchangedMoney = exchangeCurrency(exchangedMoney, 100, 1000);
    return exchangedMoney;
  }

  // 指定の通貨同士を換金する
  function exchangeCurrency(money: Currency, smaller_currency: number, larger_currency: number): Currency {
    // 大きい通貨に換金するのに必要な小さい通貨の数
    const exchangeCount: number = larger_currency / smaller_currency;

    const small = `yen${smaller_currency}` as keyof typeof money; // NOTE: 引数を信頼して無理矢理当てはめたが、もっと良い方法あるかも
    if (money[small] >= exchangeCount) {
      const large = `yen${larger_currency}` as keyof typeof money;
      // 換金処理
      money[large] += Math.floor(money[small] / exchangeCount);
      money[small] = money[small] % exchangeCount;
    }
    return money;
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}
