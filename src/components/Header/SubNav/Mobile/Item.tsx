import Link from "next/link";

export interface SubNavGroupItemProps {
  title: string;
  description: string;
  href: string;
  openInNewTab?: boolean;
}

export function MobileSubNavGroupItem(props: SubNavGroupItemProps) {
  return (
    <li className="pb-3">
      <Link
        href={props.href}
        target={props.openInNewTab ? "_blank" : "_self"}
        className="text-primary-blue flex flex-col w-full text-[16px] text-left"
      >
        <span className="hover:underline font-heading">{props.title}</span>
        <span className="text-palette-black text-sm font-normal">
          {props.description}
        </span>
      </Link>
    </li>
  );
}
