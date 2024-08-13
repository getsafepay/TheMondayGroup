import { useMemo } from "react";
import { DesktopSubNavGroupItem } from "./Item";
import { SubNavigationGroupItemProps } from "../../types";
import { Column } from "@/components/Foundations";

export interface SubNavGroupProps {
  groupTitle: string;
  groupItems: SubNavigationGroupItemProps[];
}

export function DesktopSubNavGroup(props: SubNavGroupProps) {
  const items = useMemo(() => {
    return props.groupItems.map((item, i) => (
      <DesktopSubNavGroupItem key={i} {...item} />
    ));
  }, [props.groupItems]);

  return (
    <Column columns={{ "": 3 }} className="bg-white pt-12 pr-12 pb-12 pl-0">
      <div className="m-0 p-0">
        <h5 className="text-[20px]">{props.groupTitle}</h5>
      </div>
      {items}
    </Column>
  );
}
