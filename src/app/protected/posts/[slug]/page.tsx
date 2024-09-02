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
    <div className="max-w-6xl py-8 mt-20 flex mx-auto sm:justify-center">
      <div className="max-w-4xl px-4 xl:px-0 xl:pr-6 ">
        <h1 className="text-3xl">{post.title}</h1>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <Mdx code={post.body.code} />
      </div>
      {post.toc && (
        <div className="text-sm bg-white hidden xl:block">
          <div className="sticky top-20 -mt-10 py-12">
            {/* <DashboardTableOfContents toc={toc} /> */}

            <div className="w-full rounded-md py-6 px-2">
              <div className="space-y-2">
                <p className="font-semibold border-b-2">Quick Links</p>

                <ul className="m-0 list-none">
                  <li className="mt-0 pt-2 border-b  font-medium pl-2 min-w-36">
                    <a
                      href={"/"}
                      className={
                        "inline-block font-sans no-underline transition-colors text-gray-600 hover:text-black"
                      }
                    >
                      Sample Title 1
                    </a>
                  </li>
                  <li className="mt-0 pt-2 border-b  font-medium pl-2 min-w-36">
                    <a
                      href={"/"}
                      className={
                        "inline-block font-sans no-underline transition-colors text-gray-600 hover:text-black"
                      }
                    >
                      Sample Title 2
                    </a>
                  </li>
                  <li className="mt-0 pt-2 border-b  font-medium pl-2 min-w-36">
                    <a
                      href={"/"}
                      className={
                        "inline-block font-sans no-underline transition-colors text-gray-600 hover:text-black"
                      }
                    >
                      Sample Title 3
                    </a>
                  </li>
                  <li className="mt-0 pt-2 border-b  font-medium pl-2 min-w-36">
                    <a
                      href={"/"}
                      className={
                        "inline-block font-sans no-underline transition-colors text-gray-600 hover:text-black"
                      }
                    >
                      Sample long Title 1, testing it
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
