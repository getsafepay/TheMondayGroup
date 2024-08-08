import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { mergeClasses } from "@/helpers/mergeClasses";
import ImageSpotlight from "../LightboxImage";
import Video from "../Video";

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={mergeClasses(
        "font-heading mt-2 scroll-m-20 text-3xl font-bold",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={mergeClasses(
        "font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={mergeClasses(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={mergeClasses(
        "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={mergeClasses(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={mergeClasses(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  Href: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={mergeClasses(
        "font-medium underline underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={mergeClasses(
        "leading-7 [&:not(:first-child)]:mt-6",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={mergeClasses("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={mergeClasses("my-6 ml-6 list-decimal", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={mergeClasses("mt-2", className)} {...props} />
  ),
  Putblockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={mergeClasses(" border-l-2 pl-6 italic my-6", className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={mergeClasses("rounded-md", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto rounded-lg">
      <table
        className={mergeClasses("w-full overflow-hidden rounded-lg", className)}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={mergeClasses("m-0 border-t p-0", className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={mergeClasses(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={mergeClasses(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),

  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={mergeClasses(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={mergeClasses(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      {...props}
    />
  ),

  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={mergeClasses(
        "font-medium underline underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={mergeClasses(
        "flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10",
        className
      )}
      {...props}
    />
  ),

  Image: ({ className, ...props }: React.ComponentProps<typeof Image>) => (
    <Image className={className} {...props} />
  ),

  SpotlightImage: ({
    className,
    ...props
  }: React.ComponentProps<typeof Image>) => <ImageSpotlight {...props} />,

  EmbedVideo: ({ className, ...props }: React.ComponentProps<typeof Image>) => (
    <Video {...props} />
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const MDXcontent = useMDXComponent(code);

  return (
    <div className="mdx">
      <MDXcontent components={components} />
    </div>
  );
}
