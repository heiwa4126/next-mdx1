# next-mdx1

```bash
pnpm create next-app@latest next-mdx1 --ts --use-pnpm
```

[next-mdx-remote - npm](https://www.npmjs.com/package/next-mdx-remote)


> 重要: mdx-remoteのコードを別の "utilities "ファイルに入れることは非常に慎重にしてください。
nextjsは、サーバサイドで使用するものとクライアントバンドルで使用するものを適切に判断する必要があります。
もし、mdx-remoteのコードを外部のユーティリティファイルに置き、何かが壊れている場合は、
問題を起こす前に、それを削除し、上記の単純な例から始めてください。
