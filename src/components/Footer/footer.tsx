import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { NavigationRouteWithSection } from "@/types/navigation";
import { mergeClasses } from "@/helpers/mergeClasses";
import { LinkBase } from "../Button/LinkBase";

type Props = {
  title?: string;
  previousPage?: NavigationRouteWithSection;
  nextPage?: NavigationRouteWithSection;
};

export const Footer = ({ title, previousPage, nextPage }: Props) => {
  return (
    <footer className={mergeClasses("flex flex-col gap-8")}>
      {title && (previousPage || nextPage) && (
        <div
          className={mergeClasses(
            "flex gap-4",
            "max-xl-gutters:flex-col-reverse",
            "max-lg-gutters:flex-row",
            "max-md-gutters:flex-col-reverse"
          )}
        >
          {previousPage ? (
            <LinkBase
              href={previousPage.href}
              className={mergeClasses(
                "flex border items-center gap-3 border-solid border-default rounded-md py-3 px-4 w-full transition",
                "hocus:shadow-xs hocus:bg-subtle hover:bg-slate-50"
              )}
            >
              <ArrowLeftIcon className="text-icon-secondary shrink-0" />
              <div>
                <p>
                  Previous
                  {previousPage.section ? ` (${previousPage.section})` : ""}
                </p>
                <h4>{previousPage.sidebarTitle ?? previousPage.name}</h4>
              </div>
            </LinkBase>
          ) : (
            <div className="w-full" />
          )}
          {nextPage ? (
            <LinkBase
              href={nextPage.href}
              className={mergeClasses(
                "flex border justify-between items-center gap-3 border-solid border-default rounded-md py-3 px-4 w-full transition",
                "hocus:shadow-xs hocus:bg-subtle hover:bg-slate-50"
              )}
            >
              <div>
                <p>Next{nextPage?.section ? ` (${nextPage.section})` : ""}</p>
                <h4>{nextPage.sidebarTitle ?? nextPage.name}</h4>
              </div>
              <ArrowRightIcon className="text-icon-secondary shrink-0" />
            </LinkBase>
          ) : (
            <div className="w-full" />
          )}
        </div>
      )}
    </footer>
  );
};
