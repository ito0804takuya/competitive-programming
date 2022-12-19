namespace no48 {

  function Main(input: string): void {
    let [sleepCount, hour, minute, interval] = input.split(' ').map(str => parseInt(str));

    // 例：[21 23 30 5]の場合 -> 23:30から5分おきに21度寝するということ。
    // 23:30 + (21-1)*5 = 23:30 + 100min = 23:130
    // 130 min = hourを(130/60)の商(2)で、minuteを余り(10)として正す必要がある
    // 23:130 = 23:00 + 02:10 = 25:10
    // 25:10 は24:00を超えてしまっているので、25 - 24 = 1時に変換し、1:10 が答え
    minute += (sleepCount - 1) * interval;
    if (minute >= 60) {
      hour += Math.floor(minute / 60);
      minute = minute % 60;
    }
    if (hour >= 24) hour = hour % 24;

    console.log(hour);
    console.log(minute);
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}