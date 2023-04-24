// Parsing Frontmatter
// from https://www.npmjs.com/package/next-mdx-remote

import fs from "node:fs";
import path from "node:path";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const postsDirectory = path.join(process.cwd(), "posts");

export default function TestPage({ mdxSource }: { mdxSource: MDXRemoteSerializeResult }) {
  console.log(mdxSource.frontmatter);
  return (
    <div className="wrapper">
      <h1>{mdxSource.frontmatter?.title as string}</h1>
      <MDXRemote {...mdxSource} />
    </div>
  );
}

export async function getStaticProps() {
  const file = "test.md";
  const source = fs.readFileSync(path.join(postsDirectory, file), "utf8");
  const mdxSource = await serialize(source, { parseFrontmatter: true });
  mdxSource.scope = mdxSource.frontmatter;
  return { props: { mdxSource } };
}
