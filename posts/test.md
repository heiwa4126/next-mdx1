---
title: 'Next.jsを更新する練習'
date: '2022-04-04'
---
[Next.js and Vercel - Deploying Your Next.js App | Learn Next.js](https://nextjs.org/learn/basics/deploying-nextjs-app/platform-details)
に書かれている部分の練習。


ロレム・イプサムとは、出版、ウェブデザイン、グラフィックデザインなどにおいて、レイアウトのプレースホルダーとして使用される文章のことです。この文章は、ラテン語によるテキストで、実際の意味はありません。

## 内部リンク

`/post` 以下の
[内部の.mdへのリンク](%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%A7%E3%81%8A%E9%A1%98%E3%81%84%E3%81%97%E3%81%BE%E3%81%99.md)

next/linkで処理されるまで頑張る

## Prismでコードブロック

```javascript
// Use remark to convert markdown into HTML string
const processedContent = await remark()
  .use(html, { sanitize: false })
  .use(gfm)
  //.use(() => genAttrsAdder("image", { loading: "lazy" }))
  .use(prism)
  .process(matterResult.content);
```

## テキスト例

以下はロレム・イプサムの一例です。

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## テーブル例

以下はロレム・イプサムを使用したテーブルの例です。

| **ヘッダー1** | **ヘッダー2** | **ヘッダー3** |
| --- | --- | --- |
| テキスト | テキスト | テキスト |
| テキスト | テキスト | テキスト |
| テキスト | テキスト | テキスト |

## 箇条書き例

以下はロレム・イプサムを使用した箇条書きの例です。

*   Lorem ipsum dolor sit amet
*   Consectetur adipiscing elit
*   Sed do eiusmod tempor incididunt
*   Ut labore et dolore magna aliqua



以上、ロレム・イプサムの例でした。
