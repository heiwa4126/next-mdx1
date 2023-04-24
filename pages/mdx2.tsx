// Parsing Frontmatter
// from https://www.npmjs.com/package/next-mdx-remote

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import Test from "@/components/test";

const components = { Test };

export default function TestPage({ mdxSource }: { mdxSource: MDXRemoteSerializeResult }) {
  // console.log(mdxSource.frontmatter);
  return (
    <div className="wrapper">
      <h1>{mdxSource.frontmatter?.title as string}</h1>
      {/* <MDXRemote {...mdxSource} components={components} scope={{ ...mdxSource.frontmatter }} /> */}
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = `---
title: Test
---
## {title}

Some **mdx** text, with a component <Test name={title}/>
  `;

  const mdxSource = await serialize(source, { parseFrontmatter: true });
  mdxSource.scope = mdxSource.frontmatter;
  return { props: { mdxSource } };
}
