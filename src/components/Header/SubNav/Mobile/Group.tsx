import { useMemo } from "react";
import { MobileSubNavGroupItem } from "./Item";
import { SubNavigationGroupItemProps } from "../../types";

export interface SubNavGroupProps {
  groupTitle: string;
  groupItems: SubNavigationGroupItemProps[];
}

export function MobileSubNavGroup(props: SubNavGroupProps) {
  const items = useMemo(() => {
    return props.groupItems.map((item, i) => (
      <MobileSubNavGroupItem key={i} {...item} />
    ));
  }, [props.groupItems]);

  return (
    <ul className="bg-white list-none p-6 md:px-12">
      <li className="pb-3">
        <h5 className="text-[20px] font-semibold">{props.groupTitle}</h5>
      </li>
      {items}
    </ul>
  );
}
