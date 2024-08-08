import Link from "next/link";

export interface SubNavGroupItemProps {
  title: string;
  description: string;
  href: string;
  openInNewTab?: boolean;
}

export function DesktopSubNavGroupItem(props: SubNavGroupItemProps) {
  return (
    <div className="m-0 p-0 mt-3">
      <Link
        href={props.href}
        target={props.openInNewTab ? "_blank" : "_self"}
        className="visited:text-link flex items-start flex-col text-link p-0.5 text-sm text-left"
      >
        <span className="hover:underline font-heading">{props.title}</span>
        <span className="text-default text-xs font-normal">
          {props.description}
        </span>
      </Link>
    </div>
  );
}
