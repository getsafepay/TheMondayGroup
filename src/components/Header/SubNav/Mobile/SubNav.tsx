import { useMemo } from "react";
import { MobileSubNavGroup } from "./Group";
import { mergeClasses } from "@/helpers/mergeClasses";
import { SubNavigationGroupProps } from "../../types";
import { LinkButton } from "@/components/Button";

export interface MobileSubNavProps {
  title?: string;
  description?: string;
  subNavItems?: SubNavigationGroupProps[];
  isVisible: boolean;
  onClickBack: () => void;
}

export function MobileSubNav(props: MobileSubNavProps) {
  const items = useMemo(() => {
    if (!props.subNavItems) {
      return null;
    }
    return props.subNavItems.map((item, i) => (
      <MobileSubNavGroup key={i} {...item} />
    ));
  }, [props.subNavItems]);

  return (
    <div
      className={mergeClasses(
        "translate-x-full transition-transform duration-300 z-10 fixed top-0 right-0 overflow-hidden h-screen bg-white w-full md:w-[420px]",
        props.isVisible && "translate-x-0"
      )}
    >
      <div className="mt-20 w-full">
        <LinkButton
          onClick={props.onClickBack}
          variant="primary"
          color="black"
          className="heading-xl m-6 md:mx-12 md:my-6"
          leftIcon
        >
          {props.title}
        </LinkButton>
        <div className="w-full overflow-hidden h-[calc(100vh-168px)]">
          <div className="h-full overflow-scroll [scrollbar-width:none] [-ms-overflow-style: none]">
            <p className="bg-white px-6 md:px-12 text-[16px] font-light">
              {props.description}
            </p>
            {items}
          </div>
        </div>
      </div>
    </div>
  );
}
