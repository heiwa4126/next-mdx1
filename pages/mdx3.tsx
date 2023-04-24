// Parsing Frontmatter
// from https://www.npmjs.com/package/next-mdx-remote

import { motion as motion1 } from "framer-motion";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const motion = motion1 as any;

export default function TestPage({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div className="wrapper">
      <MDXRemote {...source} components={{ motion }} />
    </div>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = `Some **mdx** text, with a component:

<motion.div animate={{ x: 100 }}  style={{ backgroundColor: "red", width: "30px", height: "30px"}} />`;
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
