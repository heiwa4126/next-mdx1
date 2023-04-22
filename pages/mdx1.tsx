// from https://www.npmjs.com/package/next-mdx-remote

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import Test from "@/components/test";

const components = { Test };

export default function TestPage({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div className="wrapper">
      <MDXRemote {...source} components={components} />
    </div>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = "Some **mdx** text, with a component <Test />";
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}

/*
getStaticPropsとTestPageは、同じファイルにありながら、2つの異なる場所で実行されます。
最終的に、ブラウザバンドルにはgetStaticPropsはまったく含まれませんし、
サーバでのみ使用される関数も含まれませんので、
serializeはブラウザバンドルから完全に削除されます。
*/
