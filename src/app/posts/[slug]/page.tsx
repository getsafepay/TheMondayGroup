import { Mdx } from "@/components/Markdown/mdx-components";
import { allPosts, type Post } from "contentlayer/generated";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  // 404 if the post does not exist.
  if (!post) {
    return null;
  }

  return (
    <div className="mx-auto max-w-4xl py-8">
      <Mdx code={post.body.code} />
    </div>
  );
}
