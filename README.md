# next-mdx1

## メモ

(TODO:あとでまとめる)

```bash
pnpm create next-app@latest next-mdx1 --ts --use-pnpm
```

[next-mdx-remote - npm](https://www.npmjs.com/package/next-mdx-remote)


> 重要: mdx-remoteのコードを別の "utilities "ファイルに入れることは非常に慎重にしてください。
nextjsは、サーバサイドで使用するものとクライアントバンドルで使用するものを適切に判断する必要があります。
もし、mdx-remoteのコードを外部のユーティリティファイルに置き、何かが壊れている場合は、
問題を起こす前に、それを削除し、上記の単純な例から始めてください。

Parsing Frontmatter のサンプルコードがうまく動かない。

> Frontmatter は YAML または JSON フォーマットでテンプレート上部に記述することが できるページ固有の変数です。

https://middlemanapp.com/jp/basics/frontmatter/


mdxの中でexportした変数がserialize()で出てこない。

[remark-prism](https://www.npmjs.com/package/remark-prism) の方はあんまりメンテナンスされてないみたいので(@typesも別だし)
[rehype-prism](https://www.npmjs.com/package/rehype-prism) に入れ替えた。

rehype-gfmは... 原理的に存在しないか。
remark か rehypeのどっちかに plugins そろえた方がいいんじゃないかとは思うけど。

imgをnext/imageにするやつはこのへん?
- [@allenlee/rehype-image-process - npm](https://www.npmjs.com/package/@allenlee/rehype-image-process)
- [@stefanprobst/rehype-next-image - npm](https://www.npmjs.com/package/@stefanprobst/rehype-next-image)

rehype plugins の作り方も覚えたいので、参考にしながら。
