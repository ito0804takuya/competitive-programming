namespace no69 {

  function Main(input: string): void {
    const [first, second] = input.split('\n').map(str => str.split(''));

    let result = "YES";
    for (const str of first) {
      if (second.includes(str)) {
        // firstから1文字ずつ取り出し、secondに含まれればsecondから削除
        second.splice(second.indexOf(str), 1);
      } else {
        result = "NO";
        break;
      }
    }
    console.log(result);
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}