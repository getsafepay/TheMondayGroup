import { Mdx } from "@/components/Markdown/mdx-components";
import { ScrollArea } from "@/components/toc/scroll-area";
import { DashboardTableOfContents } from "@/components/toc/toc";
import { getTableOfContents } from "@/lib/toc";
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

  const toc = await getTableOfContents(post.body.raw);

  return (
    <div className="mx-auto max-w-6xl py-8 relative">
      {post.toc && (
        <div className="absolute top-16 -right-24 -mt-10 pt-4 text-sm  w-60 z-40">
          <ScrollArea className="pb-10">
            <div className="sticky top-20 -mt-10 py-12">
              <DashboardTableOfContents toc={toc} />
            </div>
          </ScrollArea>
        </div>
      )}
      <div>
        <p>Title: {post.title}</p>
        <Mdx code={post.body.code} />
      </div>
    </div>
  );
}
