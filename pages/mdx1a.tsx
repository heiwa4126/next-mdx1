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
  const mdxSource = await serialize(
    // Raw MDX contents as a string
    `export const year = 2018;

    # Last year’s snowfall

    In {year}, the snowfall was above average.
    It was followed by a warm spring which caused
    flood conditions in many of the nearby rivers.
    `,
    // Optional parameters
    {
      // made available to the arguments of any custom mdx component
      scope: { year: 2019 },
      // MDX's available options, see the MDX docs for more info.
      // https://mdxjs.com/packages/mdx/#compilefile-options
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
        format: "mdx",
      },
      // Indicates whether or not to parse the frontmatter from the mdx source
      parseFrontmatter: false,
    }
  );
  // console.log(mdxSource);
  return { props: { source: mdxSource } };
}
