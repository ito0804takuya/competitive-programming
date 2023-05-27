# yukicoder
## 概要
[yukicoder](https://yukicoder.me/)の問題回答・解説。

/answer配下にあるファイルが、そのファイル名のNo.の問題への回答。

## 環境
```sh
node -v
v16.3.0
```

## 実行
```sh:jsファイル
node answer/no_XXXX.js < input.txt
```

```sh:tsファイル
# 実行
yarn ts-node answer/no_XXXX.ts < input.txt

# 提出前にコンパイル
tsc answer/no_XXXX.ts
```

```sh:goファイル
go run  answer/no_XXXX.go < input.txt
```