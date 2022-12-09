var no163;
(function (no163) {
    function Main(input) {
        var reverseCaseStrings = input.split('').map(function (str) { return str.match(/[a-z]/) ? str.toUpperCase() : str.toLowerCase(); });
        console.log(reverseCaseStrings.join(''));
    }
    Main(require("fs").readFileSync("/dev/stdin", "utf8"));
})(no163 || (no163 = {}));
