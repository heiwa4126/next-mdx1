// Parsing Frontmatter
// from https://www.npmjs.com/package/next-mdx-remote

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "node:fs";
import path from "node:path";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism";
import Link from "next/link";
import Image from "next/image";

import Test from "@/components/test";

const components = { Test, Link, Image };

const postsDirectory = path.join(process.cwd(), "posts");

export default function TestPage({ mdxSource }: { mdxSource: MDXRemoteSerializeResult }) {
  // console.log(mdxSource.frontmatter);
  return (
    <div className="wrapper">
      <h1>{mdxSource.frontmatter?.title as string}</h1>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
}

export async function getStaticProps() {
  const file = "test.md";
  const source = fs.readFileSync(path.join(postsDirectory, file), "utf8");
  const mdxSource = await serialize(
    source,
    // Optional parameters
    {
      // made available to the arguments of any custom mdx component
      // scope: { year: 2019 },
      // MDX's available options, see the MDX docs for more info.
      // https://mdxjs.com/packages/mdx/#compilefile-options
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
        format: "mdx",
      },
      // Indicates whether or not to parse the frontmatter from the mdx source
      parseFrontmatter: true,
    }
  );
  mdxSource.scope = mdxSource.frontmatter;
  return { props: { mdxSource } };
}
