namespace no163 {

  function Main(input: string): void {
    const reverseCaseStrings: string[] = input.split('').map(str => str.match(/[a-z]/) ? str.toUpperCase() : str.toLowerCase());
    console.log(reverseCaseStrings.join(''));
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}