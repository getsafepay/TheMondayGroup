import { Mdx } from "@/components/Markdown/mdx-components";
import { DashboardTableOfContents } from "@/components/toc/toc";
import { getTableOfContents } from "@/lib/toc";
import { allPosts, type Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

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

  const toc = await getTableOfContents(post.body.raw);

  return (
    <div className="mx-auto max-w-6xl py-8 flex justify-end">
      <div className="max-w-4xl pr-6">
        <h1 className="text-3xl">{post.title}</h1>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <Mdx code={post.body.code} />
      </div>
      {post.toc && (
        <div className="text-sm z-40 bg-white">
          <div className="sticky top-20 -mt-10 py-12">
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>
      )}
    </div>
  );
}
